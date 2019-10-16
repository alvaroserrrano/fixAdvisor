import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/tool/list/toolListActions';
import ToolService from 'modules/tool/toolService';

const prefix = 'TOOL_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ToolService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.tool.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.tool.destroyAll.success',
  redirectTo: '/tool',
  listActions,
});
