sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel"
], (Controller, ODataModel) => {
    "use strict";

    return Controller.extend("com.uvs.bookshop.controller.bookshop", {
        onInit() {
            const oModel = new ODataModel({
                serviceUrl: "/odata/v4/book/",
                synchronizationMode: "None",
                operationMode: "Server"
            });

        this.getView().setModel(oModel)
        }
    });
});