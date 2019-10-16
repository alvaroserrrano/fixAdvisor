const genericFixture = require('./genericFixture');
const ToolRepository = require('../database/repositories/toolRepository');

const toolFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ToolRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = toolFixture;
