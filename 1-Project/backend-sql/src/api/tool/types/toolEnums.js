const schema = `
  enum toolTypeEnum {
    plumber,
    gardener,
    mechanical technician,
     cable specialist,
    electrician,
    painter,
    specialized engineer
  }

  enum ToolSizeEnum {
    small
    medium
    large
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
