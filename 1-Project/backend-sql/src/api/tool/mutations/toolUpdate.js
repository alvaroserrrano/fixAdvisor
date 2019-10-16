const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  toolUpdate(id: String!, data: ToolInput!): Tool!
`;

const resolver = {
  toolUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.toolEdit,
    );

    return new ToolService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
