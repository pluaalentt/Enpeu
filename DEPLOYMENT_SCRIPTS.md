# Scripts de Despliegue Rápido

Este archivo contiene los comandos necesarios para desplegar el proyecto en Azure.

## 🔧 Configuración Inicial (Una sola vez)

### 1. Instalar Azure CLI (si no lo tienes)
```powershell
# Descargar desde: https://aka.ms/installazurecliwindows
# O usar winget:
winget install -e --id Microsoft.AzureCLI
```

### 2. Login en Azure
```powershell
az login
```

### 3. Configurar el directorio de Azure
```powershell
# Tu directorio: d997a13e-a6e7-4b5f-9841-78c9033fa67c
az account set --subscription d997a13e-a6e7-4b5f-9841-78c9033fa67c
```

## 📤 Subir a GitHub

### Primera vez
```powershell
# 1. Crea un repositorio en GitHub (https://github.com/new)
# 2. Luego ejecuta:

cd C:\Projects\Enpeu
git remote add origin https://github.com/TU-USUARIO/Enpeu.git
git branch -M main
git push -u origin main
```

### Actualizaciones futuras
```powershell
cd C:\Projects\Enpeu
git add .
git commit -m "Descripción de los cambios"
git push
```

## 🚀 Crear Azure Static Web App

```powershell
# Crear grupo de recursos
az group create --name rg-enpeu --location westeurope

# Crear Static Web App
az staticwebapp create `
  --name enpeu-architecture `
  --resource-group rg-enpeu `
  --source https://github.com/TU-USUARIO/Enpeu `
  --location westeurope `
  --branch main `
  --app-location "/" `
  --output-location "dist" `
  --login-with-github
```

## 🌐 Obtener la URL

```powershell
az staticwebapp show `
  --name enpeu-architecture `
  --resource-group rg-enpeu `
  --query "defaultHostname" `
  --output tsv
```

## 🔄 Comandos Útiles

### Ver estado del despliegue
```powershell
az staticwebapp show `
  --name enpeu-architecture `
  --resource-group rg-enpeu
```

### Listar todos los Static Web Apps
```powershell
az staticwebapp list --resource-group rg-enpeu --output table
```

### Eliminar el recurso (si necesitas empezar de nuevo)
```powershell
az staticwebapp delete `
  --name enpeu-architecture `
  --resource-group rg-enpeu `
  --yes
```

## 🔧 Desarrollo Local

### Instalar dependencias
```powershell
cd C:\Projects\Enpeu
& "C:\Program Files\nodejs\npm.cmd" install
```

### Ejecutar en desarrollo
```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Compilar para producción
```powershell
& "C:\Program Files\nodejs\npm.cmd" run build
```

### Vista previa de producción
```powershell
& "C:\Program Files\nodejs\npm.cmd" run preview
```

## 📝 Notas Importantes

1. Reemplaza `TU-USUARIO` con tu usuario de GitHub
2. El workflow de GitHub Actions se creará automáticamente
3. El despliegue tarda ~2-3 minutos después de cada push
4. La URL será: `https://enpeu-architecture.azurestaticapps.net`
5. Los certificados SSL son automáticos y gratuitos

## 🎯 Checklist de Despliegue

- [ ] Azure CLI instalado
- [ ] Login en Azure completado
- [ ] Repositorio de GitHub creado
- [ ] Código subido a GitHub
- [ ] Azure Static Web App creado
- [ ] Workflow de GitHub Actions ejecutándose
- [ ] Sitio web accesible en la URL de Azure
- [ ] Todas las páginas funcionando correctamente
- [ ] Diseño responsive verificado
