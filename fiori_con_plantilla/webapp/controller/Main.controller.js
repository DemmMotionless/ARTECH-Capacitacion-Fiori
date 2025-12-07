sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("fioriconplantilla.controller.Main", {
        // Navegación SIN parámetros
        onNavToHobbies: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteHobbies");
        },

        // Navegación CON parámetros
        onNavToProfesional: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // Pasamos un ID ficticio "123"
            oRouter.navTo("RouteProfesional", {
                perfilId: "123" 
            });
        }
    });
});