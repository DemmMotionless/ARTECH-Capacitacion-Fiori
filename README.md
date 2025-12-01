# ARTECH-Capacitacion-Fiori

## Ejercicio 2: Aplicación UI5 Freestyle (Sin Plantillas)

Este proyecto contiene una aplicación básica desarrollada con **SAP UI5** siguiendo el enfoque **Freestyle** (construcción manual). El objetivo es demostrar la comprensión de la estructura MVC (Modelo-Vista-Controlador) sin depender de generadores automáticos o plantillas Fiori Elements.

### 📋 Requerimientos del Ejercicio
La aplicación cumple con los siguientes puntos:
- Creación manual de la estructura de carpetas y archivos.
- Uso de **Input** para ingresar un nombre.
- Uso de **Button** para ejecutar una acción.
- Despliegue de un saludo personalizado mediante `MessageToast` y un control `Text`.
- Configuración de carga de recursos (`resourceroots`) en el `index.html`.

### 🛠️ Tecnologías Utilizadas
- **HTML5:** Punto de entrada (`index.html`).
- **XML Views:** Definición de la interfaz de usuario (`App.view.xml`).
- **JavaScript:** Lógica del controlador (`App.controller.js`).
- **SAP UI5 SDK:** Librería `sap.m` cargada vía CDN.

### 📂 Estructura del Proyecto

```text
ARTECH-Capacitacion-Fiori/
├── README.md               <-- Documentación del proyecto
└── webapp/
    ├── index.html          <-- Bootstrapping de UI5
    ├── controller/
    │   └── App.controller.js  <-- Lógica del evento "press"
    └── view/
        └── App.view.xml       <-- Diseño con Input y Button
