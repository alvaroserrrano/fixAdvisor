const userFixture = require('./userFixture');
const toolFixture = require('./toolFixture');
const bookingFixture = require('./bookingFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  tool: toolFixture,
  booking: bookingFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
