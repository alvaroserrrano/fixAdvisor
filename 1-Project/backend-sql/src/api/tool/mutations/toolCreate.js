const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  toolCreate(data: ToolInput!): Tool!
`;

const resolver = {
  toolCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.toolCreate,
    );

    return new ToolService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
