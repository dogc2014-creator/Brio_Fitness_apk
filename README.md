# Brío · Android

App Android de **Brío · Registro de entrenamiento**. La interfaz vive en `www/index.html` y Capacitor la empaqueta en un WebView nativo.

## Generar el APK en GitHub

1. Subí este repositorio a GitHub (rama `main`).
2. Entrá a **Actions → Build APK → Run workflow**, o hacé un push a `main`.
3. Al terminar, descargá el artefacto `brio-debug-apk` (contiene `app-debug.apk`).
4. Pasá el APK al celular e instalalo (habilitá "Instalar apps desconocidas").

El APK es de depuración: sirve para probar, no para publicar en Google Play.

## Actualizar la app

Reemplazá `www/index.html` por la versión nueva y hacé push. El workflow vuelve a generar el APK.

## Notas

- Los datos se guardan en el almacenamiento local del teléfono, igual que en la versión web.
- `android/` se genera en cada build y no se versiona.
