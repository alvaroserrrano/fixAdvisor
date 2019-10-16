const schema = `
  input ToolFilterInput {
    id: String
    owner: String
    name: String
    type: ToolsTypeEnum
    breed: String
    size: ToolsSizeEnum
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
