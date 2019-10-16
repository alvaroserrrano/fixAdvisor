const BookingRepository = require('../database/repositories/bookingRepository');
const ToolRepository = require('../database/repositories/toolRepository');
const ValidationError = require('../errors/validationError');
const AbstractRepository = require('../database/repositories/abstractRepository');
const UserRoleChecker = require('./iam/userRoleChecker');
const ForbiddenError = require('../errors/forbiddenError');
const bookingStatus = require('../enumerators/bookingStatus');
const moment = require('moment');

module.exports = class BookingService {
  constructor({ currentUser, language }) {
    this.repository = new BookingRepository();
    this.toolRepository = new ToolRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  async create(data) {
    await this._validateCreate(data);

    const session = await AbstractRepository.createSession();

    try {
      const record = await this.repository.create(data, {
        session,
        currentUser: this.currentUser,
      });

      await AbstractRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await AbstractRepository.abortTransaction(session);
      throw error;
    }
  }

  async _validateCreate(data) {
    await this._validatePeriodFuture(data);

    if (UserRoleChecker.isToolOwner(this.currentUser)) {
      if (data.owner !== this.currentUser.id) {
        throw new ForbiddenError(this.language);
      }

      if (data.status !== bookingStatus.BOOKED) {
        throw new ForbiddenError(this.language);
      }
    }

    await this._validateToolAndOwnerMatch(data);
  }

  async _validateToolAndOwnerMatch(data) {
    const tool = await this.toolRepository.findById(data.tool);

    if (tool.owner.id !== data.owner) {
      throw new ForbiddenError(this.language);
    }
  }

  async update(id, data) {
    await this._validateUpdate(id, data);

    const session = await AbstractRepository.createSession();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          session,
          currentUser: this.currentUser,
        },
      );

      await AbstractRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await AbstractRepository.abortTransaction(session);
      throw error;
    }
  }

  async _validateUpdate(id, data) {
    await this._validatePeriodFuture(data);

    const existingData = await this.findById(id);

    if (UserRoleChecker.isToolOwner(this.currentUser)) {
      await this._validateUpdateForToolOwner(
        id,
        data,
        existingData,
      );
    }

    if (UserRoleChecker.isEmployee(this.currentUser)) {
      await this._validateUpdateForEmployee(
        id,
        data,
        existingData,
      );
    }

    await this._validateToolAndOwnerMatch(data);
  }

  async _validateUpdateForToolOwner(id, data, existingData) {
    data.owner = this.currentUser.id;
    await this._validateIsSameOwner(id);

    if (existingData.status !== bookingStatus.BOOKED) {
      throw new ForbiddenError(this.language);
    }

    if (
      ![
        bookingStatus.CANCELLED,
        bookingStatus.BOOKED,
      ].includes(data.status)
    ) {
      throw new ForbiddenError(this.language);
    }
  }

  async _validateUpdateForEmployee(id, data, existingData) {
    if (
      [
        bookingStatus.CANCELLED,
        bookingStatus.COMPLETED,
      ].includes(existingData.status)
    ) {
      throw new ForbiddenError(this.language);
    }

    if (existingData.status !== bookingStatus.BOOKED) {
      if (data.status === bookingStatus.BOOKED) {
        throw new ForbiddenError(this.language);
      }

      if (data.owner !== existingData.owner.id) {
        throw new ForbiddenError(this.language);
      }

      if (data.tool !== existingData.tool.id) {
        throw new ForbiddenError(this.language);
      }
    }
  }

  async _validateIsSameOwner(id) {
    await this.findById(id);
  }

  async destroyAll(ids) {
    const session = await AbstractRepository.createSession();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          session,
          currentUser: this.currentUser,
        });
      }

      await AbstractRepository.commitTransaction(session);
    } catch (error) {
      await AbstractRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    const record = await this.repository.findById(id);
    await this._validateFindById(record);
    return record;
  }

  async _validateFindById(record) {
    if (UserRoleChecker.isToolOwner(this.currentUser)) {
      if (
        record.owner &&
        record.owner.id !== this.currentUser.id
      ) {
        throw new ForbiddenError(this.language);
      }
    }
  }

  async findAllAutocomplete(filter, limit) {
    if (UserRoleChecker.isToolOwner(this.currentUser)) {
      if (
        !filter ||
        !filter.owner ||
        filter.owner !== this.currentUser.id
      ) {
        throw new ForbiddenError(this.language);
      }
    }

    return this.repository.findAllAutocomplete(
      filter,
      limit,
    );
  }

  async findAndCountAll(args) {
    if (UserRoleChecker.isToolOwner(this.currentUser)) {
      args.filter = {
        ...args.filter,
        owner: this.currentUser.id,
      };
    }

    return this.repository.findAndCountAll(args);
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }

  async _validatePeriodFuture(data) {
    const { arrival, departure, status } = data;

    if (status !== bookingStatus.BOOKED) {
      return;
    }

    if (moment(arrival).isAfter(departure)) {
      throw new ValidationError(
        this.language,
        'entities.booking.validation.arrivalAfterDeparture',
      );
    }

    if (moment().isAfter(arrival)) {
      throw new ValidationError(
        this.language,
        'entities.booking.validation.periodPast',
      );
    }
  }
};
