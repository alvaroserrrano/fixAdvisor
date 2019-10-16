import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';
import bookingStatus from 'modules/booking/bookingStatus';

const selectPermissionToRead = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.bookingRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.bookingEdit,
    ),
);

const selectPermissionToEditRecord = createSelector(
  [
    selectPermissionToEdit,
    authSelectors.selectCurrentUserIsToolOwner,
    authSelectors.selectCurrentUserIsEmployee,
  ],
  (hasPermissionToEdit, isToolOwner, isEmployee) => {
    return (record) => {
      if (!hasPermissionToEdit) {
        return false;
      }

      if (!record) {
        return false;
      }

      if (isToolOwner) {
        return record.status === bookingStatus.BOOKED;
      }

      if (isEmployee) {
        return ![
          bookingStatus.COMPLETED,
          bookingStatus.CANCELLED,
        ].includes(record.status);
      }

      return true;
    };
  },
);

const selectPermissionToCreate = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.bookingCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.bookingImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.bookingDestroy,
    ),
);

const selectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
  selectPermissionToEditRecord,
};

export default selectors;
