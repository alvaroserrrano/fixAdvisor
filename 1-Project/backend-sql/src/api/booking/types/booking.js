const schema = `
  type Booking {
    id: String!
    owner: User
    tool: Tool
    arrival: DateTime
    departure: DateTime
    clientNotes: String
    employeeNotes: String
    photos: [ File! ]
    status: BookingStatusEnum
    cancellationNotes: String
    fee: Float
    receipt: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
