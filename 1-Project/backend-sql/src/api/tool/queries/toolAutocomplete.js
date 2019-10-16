const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ToolService = require('../../../services/toolService');

const schema = `
  toolAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  toolAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.toolAutocomplete,
    );

    return new ToolService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
