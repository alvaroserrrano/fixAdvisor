import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import tool from 'modules/tool/toolReducers';
import booking from 'modules/booking/bookingReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    tool,
    booking,
  });
