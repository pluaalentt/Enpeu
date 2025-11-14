# Enpeu - Cooperativa Internacional de Arquitectura

Web oficial de la cooperativa internacional de arquitectura Enpeu, desarrollada con React y Vite.

## 🌐 Descripción

Plataforma web completa para mostrar proyectos arquitectónicos internacionales, colaboraciones, galería de imágenes, blog y formulario de contacto.

## ✨ Características

- **Inicio**: Página principal con información destacada de la cooperativa
- **Proyectos**: Portafolio de proyectos arquitectónicos con filtros por categoría
- **Galería**: Colección de imágenes de proyectos internacionales
- **Colaboraciones**: Red de organizaciones y estudios asociados
- **Blog**: Artículos sobre arquitectura, sostenibilidad e innovación
- **Contacto**: Formulario de contacto e información de oficinas

## 🚀 Tecnologías

- React 18
- Vite
- React Router DOM
- CSS3 (diseño responsivo)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌍 Despliegue en Azure

Esta aplicación está configurada para desplegarse automáticamente en Azure Static Web Apps.

### Configuración:

1. Crea un recurso de Azure Static Web Apps en el portal de Azure
2. Conecta tu repositorio de GitHub
3. Azure detectará automáticamente la configuración de Vite
4. El workflow de GitHub Actions se ejecutará automáticamente

### Variables de entorno necesarias:

- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Token de autenticación (se genera automáticamente)

### Directorio de Azure:

- ID: `d997a13e-a6e7-4b5f-9841-78c9033fa67c`

## 📁 Estructura del Proyecto

```
Enpeu/
├── src/
│   ├── components/      # Componentes reutilizables (Header, Footer)
│   ├── pages/           # Páginas principales
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globales
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos base
├── public/              # Archivos estáticos
├── .github/workflows/   # Workflows de CI/CD
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias

```

## 🎨 Características de Diseño

- Diseño responsivo para todos los dispositivos
- Paleta de colores profesional
- Animaciones y transiciones suaves
- Cards interactivas
- Gradientes modernos
- Tipografía clara y legible

## 📄 Licencia

© 2024 ENPEU - Cooperativa Internacional de Arquitectura

## 👥 Contacto

- Email: info@enpeu.org
- Teléfono: +34 900 123 456
- Dirección: Passeig de Gràcia, 123, Barcelona, España
