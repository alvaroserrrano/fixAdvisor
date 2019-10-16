import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/tool/importer/toolImporterSelectors';
import ToolService from 'modules/tool/toolService';
import fields from 'modules/tool/importer/toolImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'TOOL_IMPORTER',
  selectors,
  ToolService.import,
  fields,
  i18n('entities.tool.importer.fileName'),
);
