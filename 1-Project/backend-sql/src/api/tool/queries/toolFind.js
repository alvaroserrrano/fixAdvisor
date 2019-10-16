const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  toolFind(id: String!): Tool!
`;

const resolver = {
  toolFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.toolRead,
    );

    return new ToolService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
