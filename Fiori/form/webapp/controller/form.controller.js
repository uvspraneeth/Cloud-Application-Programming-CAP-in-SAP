sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageBox, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("com.uvs.form.controller.form", {
        onInit() {
            const oData = {
                formData: {
                    name: "",
                    gender: 0,
                    email: "",
                    city: "",
                    dob: "",
                    country: "IN"
                },
                cities: [
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
                ],
                genders: [
                    { text: "Male" },
                    { text: "Female" },
                    { text: "Other" }
                ]
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel)
            const oGenderGroup = this.byId("genderGroup");

            // Dynamically populate radio buttons
            oData.genders.forEach(g =>
            oGenderGroup.addButton(new sap.m.RadioButton({ text: g.text }))
    );
        },
        onSubmit() {
            const oData = this.getView().getModel().getProperty("/formData");
            const gender = this.getView().getModel().getProperty("/genders")[oData.gender].text;
            if (!oData.name || !oData.email || !oData.city || !oData.dob) {
                MessageToast.show("Please fill in all required fields");
                return;
            }
            MessageBox.success(`Submitted info: \n
                Full Name: ${oData.name} \n
                Date of Birth: ${oData.dob} \n
                Gender : ${gender}
                City: ${oData.city} \n
                Country: ${oData.country}`, {
                title: "Submitted Details",
                actions: [MessageBox.Action.YES, MessageBox.Action.CANCEL],
                emphasizedAction: MessageBox.Action.YES,

                onClose: function (sAction) {
                    if (sAction === MessageBox.Action.YES) {
                        const oModel = this.getView().getModel();
                        oModel.setProperty("/formData", {
                            name: "",
                            email: "",
                            dob: "",
                            city: "",
                            country: "IN"
                        });
                    }
                }
            })
        },
        onDateChange(oEvent) {
            const oDatePicker = oEvent.getSource();
            const sValue = oEvent.getParameter("value");
            const bValid = oEvent.getParameter("valid"); // built-in flag from UI5

            // Case 1: Invalid date format (user typed nonsense)
            if (!bValid) {
                oDatePicker.setValueState("Error");
                oDatePicker.setValueStateText("Invalid date format. Please use dd-MM-yyyy format");
                return;
            };

            // Case 2: Future date not allowed
            const selectedDate = new Date(sValue);
            const today = new Date();
            console.log(selectedDate, today);
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate > today) {
                oDatePicker.setValueState("Error");
                oDatePicker.setValueStateText("No Future DOB are accepted.");
            } else {
                oDatePicker.setValueState("None");
            }
        },
        // onGenderSelect(){
        //     const oGroup = oEvent.getSource();
        //     const iSelectedIndex = oGroup.getSelectedIndex();
        //     const sSelectedText = oGroup.getButtons()[iSelectedIndex].getText();

        //     const oModel = this.getView().getModel();
        //     oModel.setProperty("/formData/gender", sSelectedText);
        // },
        onReset() {
            const oModel = this.getView().getModel();
            oModel.setProperty("/formData", {
                name: "",
                email: "",
                dob: "",
                city: "",
                country: "IN"
            });
        }
    });
});