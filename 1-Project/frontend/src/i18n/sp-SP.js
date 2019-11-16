const en = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Resetear',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo/a',
    export: 'Exportar a Excel',
    noDataToExport: 'Sin datos pata exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sí',
    no: 'No',
    pause: 'Pausa',
    areYouSure: 'Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
  },

  app: {
    title: 'FixAdvisor',
  },

  entities: {
    tool: {
      name: 'herramienta',
      label: 'Herramientas',
      menu: 'Herramientas',
      exporterFileName: 'exportar_herramienta',
      list: {
        menu: 'Herramientas',
        title: 'Herramientas',
      },
      create: {
        success: 'Herramienta guardada con éxito',
      },
      update: {
        success: 'Herramienta actualizada con éxito',
      },
      destroy: {
        success: 'Herramienta eliminada guardada con éxito',
      },
      destroyAll: {
        success:
          'Herramienta(s) eliminada guardada con éxito',
      },
      edit: {
        title: 'Editar Herramienta',
      },
      fields: {
        id: 'Id',
        owner: 'Propietario',
        name: 'Nombre',
        type: 'Categoría',
        size: 'Tamaño',
        bookings: 'Reservas',
        createdAt: 'Creada en',
        updatedAt: 'Actualizada en',
        createdAtRange: 'Creada en',
      },
      enumerators: {
        type: {
          mechanical: 'Mecánico',
          IT: 'Tecnología',
          plumber: 'Fontanero',
          gardener: 'Jardinero',
          cable: 'Técnico de cables',
          electrician: 'Electricista',
          painter: 'Pintor',
          other: 'Otro',
        },
        size: {
          small: 'Pequeño',
          medium: 'Mediano',
          large: 'Grande',
        },
      },
      new: {
        title: 'Nueva herramienta',
      },
      view: {
        title: 'Ver herramienta',
      },
      importer: {
        title: 'Importar herramientas',
        fileName: 'importar_herramienta',
        hint:
          'Columnas Archivo/Imágenes deben ser URLs de los archivos separados con espacio.',
      },
    },

    booking: {
      name: 'reserva',
      label: 'Reservas',
      menu: 'Reservas',
      exporterFileName: 'exportar_reserva',
      list: {
        menu: 'Reservas',
        title: 'Reservas',
      },
      create: {
        success: 'Reserva guardada con éxito',
      },
      update: {
        success: 'Reserva guardada con éxito',
      },
      destroy: {
        success: 'Reserva eliminada con éxito',
      },
      destroyAll: {
        success: 'Reserva(s) eliminada con éxito',
      },
      edit: {
        title: 'Editar Reserva',
      },
      fields: {
        id: 'Id',
        owner: 'Propietario',
        tool: 'Herramienta',
        arrivalRange: 'Llegada',
        arrival: 'Llegada',
        departureRange: 'Salida',
        departure: 'Salida',
        clientNotes: 'Notas',
        employeeNotes: 'Notas de empleado',
        photos: 'Fotos',
        status: 'Estado',
        cancellationNotes: 'Notas de cancelación',
        feeRange: 'Impuesto total',
        fee: 'Impuesto total',
        receipt: 'Recibo',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        period: 'Periodo',
      },
      enumerators: {
        status: {
          booked: 'Reservado',
          progress: 'En progreso',
          cancelled: 'Cancelado',
          completed: 'Completado',
        },
      },
      new: {
        title: 'Nueva Reserva',
      },
      view: {
        title: 'Ver Reserva',
      },
      importer: {
        title: 'Importar Reservas',
        fileName: 'importar_reserva',
        hint:
          'Columnas Archivo/Imágenes deben ser URLs de los archivos separados con espacio.',
      },
      validation: {
        periodPast: 'El periodo debe ser en el futuro',
        periodFull:
          'Lo sentimos, el taller está lleno en este momento',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crear cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Olvidó contraseña',
    signin: 'Iniciar sesión',
    signup: 'Registrarse',
    signout: 'Cerrar sesión',
    alreadyHaveAnAccount:
      'Ya tiene una cuenta? Inicie sesión.',
    signinWithAnotherAccount:
      'Iniciar sesión con otra cuenta',
    emailUnverified: {
      message: `Por favor confirme su email en <strong>{0}</strong> para continuar.`,
      submit: `Reenviar email de verificación`,
    },
    emptyPermissions: {
      message: `No tiene permisos todavía. Espera a que el administrador le otorga sus permisos`,
    },
    passwordReset: {
      message: 'Enviar email para cambiar contraseña',
      error: `Email no reconocido`,
    },
    emailAddressVerificationEmail: {
      error: `Email no reconocido`,
    },
    verificationEmailSuccess: `Email de verificación enviado con éxito`,
    passwordResetSuccess: `Email de cambio de contraseña enviado con éxito`,
  },

  roles: {
    manager: {
      label: 'Manager',
      description: 'Acceso total a todos los recursos',
    },
    employee: {
      label: 'Emplead',
      description: 'Acceso de empleado',
    },
    toolOwner: {
      label: 'Propietario de herramienta/servicio',
      description:
        'Acceso de Propietario de herramienta/servicio',
    },
  },

  iam: {
    title: 'Usuarios',
    menu: 'Usuarios',
    disable: 'Deshabilitar',
    disabled: 'Deshabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario abilitado con éxito',
    doDisableSuccess: 'Usuario desabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) desabilitado con éxito',
    doEnableAllSuccess: 'Usuario(s) abilitado con éxito',
    doAddSuccess: 'Usuario(s) guardado con éxito',
    doUpdateSuccess: 'Usuario guardado con éxito',
    viewBy: 'Ver En',
    users: {
      name: 'usuarios',
      label: 'Usuarios',
      exporterFileName: 'exportar_usuarios',
      doRemoveAllSelectedSuccess:
        'Permisos eliminados con éxito',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permisos eliminados con éxito',
    },
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Nuevo Usuario(s)',
      emailsHint: 'Separar emails con comas.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'importar_usuarios',
      hint:
        'Columnas Archivo/Imágenes deben ser URLs de los archivos separados con espacio. Relaciones deben ser el ID del registro separado por espacio. Roles deben ser el rol ID separado con espacio.',
    },
    errors: {
      userAlreadyExists:
        'Ya existe un usuario con este email',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: `No puedes desabilitarte a ti mismo`,
      revokingOwnPermission: `No puedes deshacerte de los permisos de tu supervisor`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Autenticación Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre',
      firstName: 'First Nombre',
      lastName: 'Last Nombre',
      status: 'Status',
      disabled: 'Desactivado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado en',
      updatedAt: 'Actualizado en',
      roleUser: 'Rol/Usuario',
      roles: 'Rol',
      createdAtRange: 'Creado en',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
    },
    enabled: 'Activado',
    disabled: 'Desactivado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} es inválido',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separar con comas.',
    fields: {
      id: 'Id',
      timestampRange: 'Periodo',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email de usuario',
    },
  },
  settings: {
    title: 'Ajustes',
    menu: 'Ajustes',
    save: {
      success:
        'Ajustes guardados con éxito. La página se recargará en {0} segundos para que puedas ver los cambios',
    },
    fields: {
      theme: 'Tema',
      dailyFee: 'Impuesto diario ',
      capacity: 'Capacidad',
    },
    colors: {
      default: 'Predeterminado',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde Polar',
      purple: 'Morado',
      red: 'Rojo',
      volcano: 'Volcano',
      yellow: 'Amarillo',
    },
  },
  home: {
    menu: 'Home',
  },
  errors: {
    backToHome: 'Volver a home',
    403: `Lo sentimos, no tienes acceso a esta página`,
    404: 'Lo sentimos, la página no existe',
    500: 'Lo sentimos, el servidor ha detectado un error',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Se ha producido un error',
    },
    defaultErrorMessage: 'Ops, se ha producido un error',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} es invalido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min:
        '${path} debe ser por lo menos ${min} caracteres',
      max: '${path} debe ser como máximo ${max} caracteres',
      matches: '${path} debe coincidir con: "${regex}"',
      email: '${path} debe ser un email válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} no debe tener espacio',
      lowercase: '${path} debe estar en minúscula',
      uppercase: '${path} debe estar en mayúscula',
      selected: '${path} debe ser seleccionado',
    },
    number: {
      min: '${path} debe ser mayor que o igual a ${min}',
      max: '${path} debe ser menor que o igual a ${max}',
      lessThan: '${path} debe ser less que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} debe ser not igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número positivo',
      integer: '${path} debe ser un número',
    },
    date: {
      min: '${path} debe ser mayor que ${min}',
      max: '${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} no puede tener valores no especificados en la figura del objeto',
    },
    array: {
      min: '${path} debe tener por lo menos ${min} items',
      max:
        '${path} debe tener menos o igual a ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Subir archivo',
    image: 'El archivo debe ser una imagen',
    size: 'Archivo demasiado grande. Tamaño máximo de {0}',
    formats: `Formato inválido. Debe ser '{0}'.`,
  },
  importer: {
    line: 'Línea',
    status: 'Status',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: `{0} importado, {1} pendiente y {2} con error`,
    importedMessage: `Procesado {0} de {1}.`,
    noNavigateAwayMessage:
      'No cierra esta página o perderá el archivo',
    completed: {
      success:
        'Importe completado. Todos los datos fueron importados con éxito',
      someErrors:
        'Proceso completado,pero algunas filas no pudieron ser importadas.',
      allErrors: 'Importe fallido. Filas inválidas.',
    },
    form: {
      downloadTemplate: 'Descargar template',
      hint: 'Click o desliza el archivo para importarlo',
    },
    list: {
      discardConfirm:
        'Estás seguro? Todos los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo está vacío',
      invalidFileExcel:
        'Solamente archivos excel (.xlsx) están permitidos',
      invalidFileUpload:
        'Archivo inválido. Asegúrate de actualizar a la última versión',
      importHashRequired: 'Import hash obligatorio',
      importHashExistent: 'Datos importados previamente',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
  },

  imagesViewer: {
    noImage: 'Imágenes no disponibles',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Cuenta desactivada',
    'auth/user-not-found': `Lo sentimos, no reconocemos sus credenciales`,
    'auth/wrong-password': `Lo sentimos, no reconocemos sus credenciales`,
    'auth/weak-password': 'Contraseña muy débil',
    'auth/email-already-in-use': 'Email en uso',
    'auth/invalid-email':
      'Por favor inserte un email válido',
    'auth/account-exists-with-different-credential':
      'Email en uso para otro método de autenticación',
    'auth/credential-already-in-use': 'Credenciales en uso',
  },
};

export default en;
