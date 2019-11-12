const schema = `
  enum ToolTypeEnum {
    mechanical
    IT
    plumber
    gardener
    cable
    electrician
    painter
    other
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
