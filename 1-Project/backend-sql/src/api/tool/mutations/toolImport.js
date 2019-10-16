const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  toolImport(data: ToolInput!, importHash: String!): Boolean
`;

const resolver = {
  toolImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.toolImport,
    );

    await new ToolService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
