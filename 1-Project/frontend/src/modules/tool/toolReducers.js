import list from 'modules/tool/list/toolListReducers';
import form from 'modules/tool/form/toolFormReducers';
import view from 'modules/tool/view/toolViewReducers';
import destroy from 'modules/tool/destroy/toolDestroyReducers';
import importerReducer from 'modules/tool/importer/toolImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
