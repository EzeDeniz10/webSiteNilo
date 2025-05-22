# Guía de Contribución

## 1. Estructura de Ramas

- `main`: Rama de producción. Contiene el código estable y listo para desplegar.
- `dev`: Rama principal de desarrollo. Base para todas las funcionalidades nuevas.

## 2. Convenciones para nombrar ramas

- `feature/nombre-caracteristica`: Para nuevas características
- `bugfix/descripcion-problema`: Para corrección de errores detectados
- `hotfix/descripcion-problema`: Para correcciones urgentes en producción
- `refactor/descripcion`: Para mejoras o reestructuración del código

Ejemplos:
- `feature/login-form`
- `bugfix/navbar-responsive`
- `hotfix/error-deploy`
- `refactor/limpieza-de-codigo`

## 3. Flujo de Trabajo

### Desarrollo Diario

1. Trabajar siempre a partir de `dev`.
2. Crear una nueva rama usando el nombre correcto (ver arriba).
3. Realizar commits descriptivos.
4. Subir la rama al repositorio con `git push origin nombre-rama`.

### Fusión de Código

- Las ramas `feature/*`, `bugfix/*`, etc. se fusionan a `dev` mediante Pull Request.
- Una vez que `dev` es estable y probado, se fusiona con `main` para producción.
