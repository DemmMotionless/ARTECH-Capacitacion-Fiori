sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
    "use strict";

    return Controller.extend("fioriconplantilla.controller.Profesional", {
        onInit: function () {
            var oViewModel = new JSONModel({
                idRecibido: ""
            });
            this.getView().setModel(oViewModel, "vista");

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteProfesional").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sPerfilId = oEvent.getParameter("arguments").perfilId;
            this.getView().getModel("vista").setProperty("/idRecibido", sPerfilId);
        },

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteMain", {}, true);
            }
        }
    });
});