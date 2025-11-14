# Guía de Despliegue en Azure Static Web Apps

## 📋 Prerrequisitos

- Cuenta de Azure activa
- Cuenta de GitHub
- Azure CLI instalado (opcional)
- Directorio de Azure: `d997a13e-a6e7-4b5f-9841-78c9033fa67c`

## 🚀 Pasos para Desplegar

### Opción 1: Desde el Portal de Azure (Recomendado)

1. **Crear recurso de Azure Static Web Apps**
   - Ve al [Portal de Azure](https://portal.azure.com)
   - Busca "Static Web Apps" en el buscador
   - Click en "Create"

2. **Configuración Básica**
   - **Subscription**: Selecciona tu suscripción
   - **Resource Group**: Crea uno nuevo llamado "rg-enpeu" o usa uno existente
   - **Name**: `enpeu-architecture`
   - **Plan type**: Free (para desarrollo) o Standard (para producción)
   - **Region**: West Europe (o la más cercana)
   - **Deployment source**: GitHub

3. **Autenticación con GitHub**
   - Click en "Sign in with GitHub"
   - Autoriza a Azure a acceder a tus repositorios

4. **Detalles de Build**
   - **Organization**: Tu usuario/organización de GitHub
   - **Repository**: Selecciona el repositorio donde subirás este proyecto
   - **Branch**: main
   - **Build Presets**: Vite
   - **App location**: `/`
   - **Api location**: (dejar vacío)
   - **Output location**: `dist`

5. **Review + Create**
   - Revisa la configuración
   - Click en "Create"
   - Azure creará automáticamente el recurso y un workflow de GitHub Actions

6. **Obtener la URL**
   - Una vez creado, ve al recurso
   - Copia la URL (será algo como: `https://enpeu-architecture.azurestaticapps.net`)

### Opción 2: Usando Azure CLI

```bash
# Login a Azure
az login

# Crear el recurso Static Web App
az staticwebapp create \
  --name enpeu-architecture \
  --resource-group rg-enpeu \
  --source https://github.com/TU-USUARIO/Enpeu \
  --location "westeurope" \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Opción 3: Conexión Manual del Repositorio

Si ya tienes el proyecto en GitHub:

1. **Sube el proyecto a GitHub**
   ```bash
   # Crea un nuevo repositorio en GitHub primero
   git remote add origin https://github.com/TU-USUARIO/Enpeu.git
   git branch -M main
   git push -u origin main
   ```

2. **El workflow de GitHub Actions se ejecutará automáticamente**
   - Ve a la pestaña "Actions" en GitHub
   - Verás el workflow "Azure Static Web Apps CI/CD"
   - Espera a que termine (2-5 minutos)

## 🔧 Configuración del Workflow

El archivo `.github/workflows/azure-static-web-apps.yml` ya está configurado. Solo necesitas:

1. **Secret de Azure**: Se crea automáticamente cuando conectas desde el portal de Azure
2. El secret `AZURE_STATIC_WEB_APPS_API_TOKEN` se añade automáticamente a tu repositorio

## ✅ Verificación del Despliegue

Después del despliegue:

1. **URL de producción**: `https://NOMBRE-DEL-RECURSO.azurestaticapps.net`
2. **Verificar funcionalidad**:
   - Inicio ✓
   - Navegación entre páginas ✓
   - Responsive design ✓
   - Formularios ✓

## 🔄 Actualizaciones Automáticas

Cada vez que hagas push a la rama `main`:
- GitHub Actions se ejecuta automáticamente
- Compila el proyecto con Vite
- Despliega a Azure
- Actualización en vivo en ~2-3 minutos

## 📊 Monitoreo

En el Portal de Azure:
- **Metrics**: Visitas, ancho de banda, errores
- **Logs**: Application Insights (opcional)
- **Custom domains**: Añadir dominio personalizado
- **SSL**: Certificados automáticos gratis

## 🌐 Dominio Personalizado (Opcional)

```bash
# Añadir dominio personalizado
az staticwebapp hostname set \
  --name enpeu-architecture \
  --resource-group rg-enpeu \
  --hostname www.enpeu.org
```

## 📝 Variables de Entorno

Si necesitas variables de entorno:

1. Ve al recurso en Azure Portal
2. Configuration > Application settings
3. Añade las variables necesarias

## 🔐 Seguridad

El archivo `staticwebapp.config.json` incluye:
- Rutas configuradas para SPA
- Headers de seguridad
- Configuración de MIME types

## 🆘 Solución de Problemas

**Error: Build failed**
- Verifica que las dependencias estén en `package.json`
- Revisa los logs en GitHub Actions

**Error: 404 en rutas**
- Verifica `staticwebapp.config.json`
- Asegúrate que `navigationFallback` está configurado

**Error: Assets no cargan**
- Verifica la ruta en `vite.config.js`
- Comprueba `output_location: "dist"` en el workflow

## 📞 Soporte

- [Documentación Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Docs](https://docs.github.com/actions)
- Email: info@enpeu.org
