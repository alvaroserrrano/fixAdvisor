import ToolService from 'modules/tool/toolService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'TOOL_FORM';

export default formActions({
  prefix,
  createFn: ToolService.create,
  createSuccessMessageI18nKey:
    'entities.tool.create.success',
  updateFn: ToolService.update,
  updateSuccessMessageI18nKey:
    'entities.tool.update.success',
  findFn: ToolService.find,
  redirectTo: '/tool',
});
