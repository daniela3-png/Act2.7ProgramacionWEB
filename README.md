 Actividad 2.7: Integración de Componentes Desarrollados
Catálogo de Biodiversidad y Fauna de Iquique (Región de Tarapacá)

Este proyecto consiste en la integración completa de componentes y scripts desarrollados en **JavaScript (JS)** con una maqueta web informativa. El desarrollo centraliza la lógica en el backend utilizando **Node.js** y **Express**, garantizando la coherencia en el flujo de datos, la compatibilidad de rutas, el manejo de errores y la implementación de códigos de estado HTTP adecuados bajo un entorno profesional y colaborativo.



##Integrantes y Roles del Equipo

Para cumplir con una organización de trabajo eficiente y ordenada, el equipo definió los siguientes roles de desarrollo:

Daniela Montecinos** — *Responsable de Rutas y Backend* (`server.js`, `/routes`)
Alexandra Ticona** — *Responsable de Integración de Maqueta y Frontend* (`/public`)
Mauricio Fernandez** — *Responsable de Pruebas, Depuración y Documentación (QA)



 Estructura del Proyecto

El proyecto sigue estándares y buenas prácticas de desarrollo backend mediante una estructura limpia y modular por carpetas:

text
Act2.7ProgramacionWEB/
│
├── docs/                 # Documentación, pautas de evaluación y evidencias
│   └── evidencias.txt    # Registro de pruebas locales realizadas
│
├── public/               # Maqueta / Frontend (Archivos estáticos servidos)
│   ├── index.html        # Página principal y menú de navegación (Home)
│   ├── marina.html       # Interfaz interactiva de Fauna Marina
│   └── terrestre.html    # Interfaz interactiva de Fauna Terrestre
│
├── routes/               # Componentes JS del Backend (Lógica de endpoints)
│   ├── marina.js         # API de datos de la fauna marina costera
│   └── terrestre.js      # API de datos de la fauna del interior y desierto
│
├── .gitignore            # Exclusión de archivos pesados (node_modules/)
├── package.json          # Configuración de Node.js y dependencias del proyecto
└── server.js             # Punto de entrada principal de nuestro servidor Express
