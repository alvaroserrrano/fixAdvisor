const ToolService = require('../../../services/toolService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  toolList(filter: ToolFilterInput, limit: Int, offset: Int, orderBy: ToolOrderByEnum): ToolPage!
`;

const resolver = {
  toolList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.toolRead,
    );

    return new TsoolService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
