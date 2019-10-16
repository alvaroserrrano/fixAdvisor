import ToolService from 'modules/tool/toolService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/tool/list/toolListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/tool/list/toolListExporterFields';

const prefix = 'TOOL_LIST';

export default paginationAction(
  prefix,
  ToolService.list,
  selectors,
  i18n('entities.tool.exporterFileName'),
  exporterFields,
);
