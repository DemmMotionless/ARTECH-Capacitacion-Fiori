sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("<your.namespace>.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            this.ownerComponent.setModel(new ResourceModel({
                bundleName: "webapp.i18n.i18n"
            }), "i18n");
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});