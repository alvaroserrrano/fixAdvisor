const schema = `
  input ToolInput {
    owner: String!
    name: String!
    type: toolTypeEnum!
    size: ToolSizeEnum!
    bookings: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
