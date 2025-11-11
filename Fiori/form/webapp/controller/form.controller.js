sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("com.uvs.form.controller.form", {
        onInit() {
            const oData = {
                formData : {
                    name: "",
                    email: "",
                    city: "",
                    country: "IN"
                },
                cities : [
                    { key: "HYD", name: "Hyderabad" },
                    { key: "WRG", name: "Warangal" },
                    { key: "KHM", name: "Khammam" },
                    { key: "NLG", name: "Nalgonda" },
                    { key: "SRP", name: "Suryapet" },
                    { key: "KNR", name: "Karimnagar" },
                    { key: "NZB", name: "Nizamabad" },
                    { key: "MDK", name: "Medak" },
                    { key: "MBN", name: "Mahbubnagar" },
                    { key: "SDL", name: "Siddipet" }
                ]
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel)
        },
        onSubmit() {
            const oData = this.getView().getModel().getProperty("/formData");

            if (!oData.name || !oData.email || !oData.city) {
                MessageToast.show("Please fill in all required fields");
                return;
            }
            MessageToast.show(`Submitted: ${oData.name} from ${oData.city}, ${oData.country}`)
        },
        onReset() {
            const oModel = this.getView().getModel();
            oModel.setProperty("/formData", {
                name: "",
                email: "",
                city: "",
                country: "IN"
            });
        }
    });
});