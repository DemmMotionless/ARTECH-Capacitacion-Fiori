sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" // Importamos la librería para notificaciones tipo "tostada"
], function (Controller, MessageToast) {
    "use strict";

    // "mi.saludo.controller.App" debe coincidir con lo que pusimos en index y view
    return Controller.extend("mi.saludo.controller.App", {

        onMostrarSaludo: function () {
            // 1. Capturamos el control Input buscándolo por su ID
            var oInput = this.byId("inputNombre");
            
            // 2. Obtenemos el valor que escribió el usuario
            var sNombreUsuario = oInput.getValue();

            // 3. Verificamos si escribió algo
            if (sNombreUsuario.length === 0) {
                MessageToast.show("¡Por favor escribe un nombre!");
            } else {
                // 4. Mostramos el saludo
                MessageToast.show("Hola " + sNombreUsuario + ", bienvenido a UI5.");
            }
        }
    });
});