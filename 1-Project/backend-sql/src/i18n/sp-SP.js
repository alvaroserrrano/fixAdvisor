const sp = {
  app: {
    title: 'FixAdvisor',
  },

  entities: {
    tool: {
      validation: {
        bookingExists: `No se puede eliminar esta herramienta/servicio porque ya ha sido reservada con anterioridad`,
      },
    },
    booking: {
      validation: {
        arrivalAfterDeparture:
          'Fecha de salida debe ser posterior a fecha de entrada',
        periodPast: 'Este periodo debe ser en el futuro',
        periodFull:
          'Lo sentimos, el taller se encuentro lleno en estos momentos',
      },
    },
  },

  auth: {
    passwordReset: {
      error: `Email no reconocido`,
    },
    emailAddressVerificationEmail: {
      error: `Email no reconocido`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'Ya existe un usuario con ese email',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: `No puedes deshabilitarte a ti mismo`,
      revokingOwnPermission: `No puedes eliminar las responsabilidades asignadas por tu supervisor`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'El archivo está vacío',
      invalidFileExcel:
        'Solamente archivos excel (.xlsx)están permitidos',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de actualizar a la última versión.',
      importHashRequired: 'Import hash obligatorio',
      importHashExistent:
        'Los datos ya han sido importados previamente',
    },
  },

  errors: {
    forbidden: {
      message: 'Prohibidi',
    },
    validation: {
      message: 'Lo sentimos, ha ocurrido un error',
    },
  },

  emails: {
    invitation: {
      subject: `Has sido invitado a {0}`,
      body: `
          <p>Hola,</p>
          <p>Has sido invitado a {0}.</p>
          <p>Siga este link para proceder con su registro.</p>
          <p><a href="{1}">{1}</a></p>
          <p>Gracias,</p>
          <p>FixAdvisor</p>
        `,
    },
    emailAddressVerification: {
      subject: `Verifique su email para {0}`,
      body: `
          <p>Hola</p>
          <p>Siga este link para verificar su correo.</p>
          <p><a href='{0}'>{0}</a></p>
          <p>Si no desea verificar este email por favor ignore este mensaje.</p>
          <p>Gracias,</p>
          <p>FixAdvisor</p>
        `,
    },
    passwordReset: {
      subject: `Resetee su contraseña para {0}`,
      body: `
          <p>Hola,</p>
          <p>Siga este link para resetear su {0}contraseña para su {1} account.</p>
          <p><a href='{2}'>{2}</a></p>
          <p>Si no desea cambiar su contraseña por favor ignore este link.</p>
          <p>Gracias,</p>
          <p>FixAdvisor</p>
        `,
    },
    bookingUpdate: {
      subject: 'Tenemos noticias {1} en {0}!',
      body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 10px 0 30px 0;">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="600"
            >
              <tr>
                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td
                        style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;"
                      >
                        <b>Tenemos noticias sobre {1}</b>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
                      >
                        {2}
                      </td>
                    </tr>
                    {3}
                    <tr>
                      <td
                        style="text-align: center; padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
                      >
                        <a href="{4}">Visite {0} para más información</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
        `,
      twoImagesTr: `
        <tr>
        <td>
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tr>
              {0}
              <td style="font-size: 0; line-height: 0;" width="20">
                &nbsp;
              </td>
              {1}
            </tr>
          </table>
        </td>
      </tr>
        `,
      imageTd: `<td width="260" valign="top">
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <tr>
            <td>
              <img
                src="{0}"
                alt=""
                width="100%"
                style="display: block;"
              />
            </td>
          </tr>
        </table>
      </td>`,
    },
  },
};

module.exports = sp;
