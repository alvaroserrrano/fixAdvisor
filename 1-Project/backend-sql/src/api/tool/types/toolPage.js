const schema = `
  type ToolPage {
    rows: [Tool!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
