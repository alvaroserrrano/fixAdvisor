const schema = `
  input ToolFilterInput {
    id: String
    owner: String
    name: String
    type: ToolTypeEnum
    size: ToolSizeEnum
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
