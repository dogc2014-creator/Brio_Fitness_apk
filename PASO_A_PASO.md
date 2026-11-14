# Cómo conseguir el APK de brío (paso a paso)

Todo se hace desde el navegador de la computadora o del celular. No necesitás instalar nada.

## 1. Crear tu cuenta de GitHub (si no tenés)
1. Entrá a **github.com** y tocá **Sign up**.
2. Completá el correo, la contraseña y el nombre de usuario.

## 2. Crear un repositorio (la carpeta del proyecto en GitHub)
1. Arriba a la derecha tocá el **+** y después **New repository**.
2. En **Repository name** escribí: `brio-android`
3. Marcá **Private** (así nadie más ve tu código).
4. Tocá **Create repository**.

## 3. Subir los archivos
1. En la página del repositorio tocá **uploading an existing file**.
2. Arrastrá **todo lo que está dentro de la carpeta `brio-android-trial`**, **excepto `codigos.txt`**.
   - `codigos.txt` tiene los códigos de activación: **no lo subas nunca**.
3. Bajá hasta el final y tocá **Commit changes**.

**Importante:** la carpeta `.github` (con el archivo del workflow) a veces no se sube al arrastrar. Si no aparece en el repositorio:
1. Tocá **Add file → Create new file**.
2. En el nombre escribí exactamente: `.github/workflows/android.yml`
3. Copiá el contenido del archivo `.github/workflows/android.yml` que está en tu carpeta y pegalo.
4. Tocá **Commit changes**.

## 4. Crear el APK
1. Arriba del repositorio tocá la pestaña **Actions**.
2. Si aparece un aviso verde, tocá **I understand my workflows, go ahead and enable them**.
3. Elegí **Build APK** a la izquierda y tocá **Run workflow** → **Run workflow**.
4. Esperá entre 5 y 10 minutos. Cuando la ejecución tenga un tilde verde ✅, está lista.

## 5. Descargar el APK
1. Tocá la ejecución (la línea con el tilde verde).
2. Bajá hasta **Artifacts** y tocá **brio-debug-apk**. Se descarga un archivo `.zip`.
3. Descomprimilo: adentro está **`app-debug.apk`**.

## 6. Instalarlo en el celular Android
1. Pasá `app-debug.apk` al celular (por Google Drive, WhatsApp o cable USB).
2. Tocá el archivo. Si Android pide permiso, activá **Permitir de esta fuente** (o **Instalar apps desconocidas**).
3. Tocá **Instalar** y después **Abrir**.

## 7. Dar acceso a un usuario
- La app funciona gratis durante **14 días** desde el primer uso.
- Cuando se termina el plazo, pide un código de activación.
- Los códigos están en `codigos.txt`. Entregá **uno por usuario**.

## Si necesitás cambiar algo en la app
Pedímelo en el chat y te paso el archivo `www/index.html` actualizado. Reemplazalo en GitHub (**Add file → Upload files**) y volvé al paso 4.

## Para crear más códigos
En una computadora con Node.js instalado, dentro de la carpeta del proyecto ejecutá:
`node tools/generar_codigos.js 10`
Eso crea 10 códigos nuevos en `codigos.txt` y actualiza la app. Después subí de nuevo `www/index.html` a GitHub.
