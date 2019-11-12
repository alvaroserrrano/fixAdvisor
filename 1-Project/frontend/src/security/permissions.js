import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [roles.manager, roles.employee],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [roles.manager],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.manager,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [roles.manager],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [roles.manager, roles.employee],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.manager],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.manager],
      },
      toolImport: {
        id: 'toolImport',
        allowedRoles: [roles.manager, roles.employee],
      },
      toolCreate: {
        id: 'toolCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
        allowedStorageFolders: ['tool'],
      },
      toolEdit: {
        id: 'toolEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
        allowedStorageFolders: ['tool'],
      },
      toolDestroy: {
        id: 'toolDestroy',
        allowedRoles: [roles.manager],
        allowedStorageFolders: ['tool'],
      },
      toolRead: {
        id: 'toolRead',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
      },
      toolAutocomplete: {
        id: 'toolAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
      },

      bookingImport: {
        id: 'bookingImport',
        allowedRoles: [roles.manager],
      },
      bookingCreate: {
        id: 'bookingCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingEdit: {
        id: 'bookingEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingDestroy: {
        id: 'bookingDestroy',
        allowedRoles: [roles.manager],
        allowedStorageFolders: ['booking'],
      },
      bookingRead: {
        id: 'bookingRead',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
      },
      bookingAutocomplete: {
        id: 'bookingAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.toolOwner,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
