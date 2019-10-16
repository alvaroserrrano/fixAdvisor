const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const tool = sequelize.define(
    'tool',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          'plumber',
          'gardener',
          'mechanical technician',
          ' cable specialist',
          'electrician',
          'painter',
          'specialized engineer',
        ],
      },
      size: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['small', 'medium', 'large'],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  tool.associate = (models) => {
    models.tool.belongsTo(models.user, {
      as: 'owner',
      constraints: false,
    });

    models.tool.hasMany(models.booking, {
      as: 'bookings',
      constraints: false,
      foreignKey: 'toolId',
    });

    models.tool.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.tool.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return tool;
};
