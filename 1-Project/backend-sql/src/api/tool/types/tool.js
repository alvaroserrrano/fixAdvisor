const schema = `
  type Tool {
    id: String!
    owner: User
    name: String
    type: toolTypeEnum
    size: ToolSizeEnum
    bookings: [ Booking! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
