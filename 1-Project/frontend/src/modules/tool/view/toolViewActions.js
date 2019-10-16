import viewActions from 'modules/shared/view/viewActions';
import ToolService from 'modules/tool/toolService';

const prefix = 'TOOL_VIEW';

export default viewActions({
  prefix,
  findFn: ToolService.find,
  redirectToOnError: '/tool',
});
