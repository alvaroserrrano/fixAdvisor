const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ToolService = require('../../../services/toolService');

const schema = `
  toolAutocomplete(query: String, owner: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  toolAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.toolAutocomplete,
    );

    const filter = {
      query: args.query,
      owner: args.owner,
    };

    return new ToolService(context).findAllAutocomplete(
      filter,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
