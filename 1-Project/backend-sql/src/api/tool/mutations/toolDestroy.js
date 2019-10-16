const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  toolDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  toolDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.toolDestroy,
    );

    await new ToolService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
