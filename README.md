# NestJS-Google-Auth
Aplicación NestJS con inicio de sesión con Google.

## Instalación

```bash
$ npm install
```

## Iniciar la app

```bash
# Desarrollo
$ npm run start

# Desarrollo - Cambios en tiempo real
$ npm run start:dev
```

## Variables de entorno
**MONGO_URI:** Dirección de la base de datos MongoDB.

**GOOGLE_CLIENT_ID:** ID del cliente de Google.

**GOOGLE_CLIENT_SECRET:** Secreto del cliente de Google.

Para obtener las variables de entorno relacionadas con Google, se debe entrar al siguiente link: https://console.cloud.google.com/

Luego, se debe crear un proyecto y habilitar las credenciales.

## Probar aplicación
- Ir al endpoint http://localhost:3000/auth/google (redirección al login de Google).
- Después de seleccionar la cuenta, se redirigirá a http://localhost:3000/auth/profile
- El guardián CheckTokenExpiryGuard verificará la sesión iniciada y mostrará el perfil.
- Ir al endpoint http://localhost:3000/auth/logout para cerrar sesión.

## Referencias:
Inspirado en: https://github.com/bhagyajitjagdev/nestjs-passport-google

Explicación: https://blog.stackademic.com/integrating-google-login-with-nestjs-using-passport-js-0f25e02e503b

Documentación Passport: https://www.passportjs.org/tutorials/google/
