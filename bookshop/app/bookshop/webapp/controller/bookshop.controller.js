sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.uvs.bookshop.controller.bookshop", {
        onInit() {
            const oView = this.getView();

            // create empty models so headers show immediately
            oView.setModel(new JSONModel({ Authors: [] }), "authorsModel");
            oView.setModel(new JSONModel({ Books: [] }), "booksModel");

            // base OData v4 service path (adjust if your service path differs)
            const base = "/odata/v4/book";

            // load Authors
            (async () => {
                try {
                    const res = await fetch(`${base}/authors`);
                    if (!res.ok) throw new Error(res.statusText);
                    const data = await res.json();
                    const a = data.value || data;
                    oView.getModel("authorsModel").setProperty("/Authors", a);
                } catch (e) {
                    console.error("Failed to load authors:", e);
                    oView.getModel("authorsModel").setProperty("/Authors", []);
                }
            })();

            // load Books
            (async () => {
                try {
                    const res = await fetch(`${base}/books`);
                    if (!res.ok) throw new Error(res.statusText);
                    const data = await res.json();
                    const b = data.value || data;
                    oView.getModel("booksModel").setProperty("/Books", b);
                } catch (e) {
                    console.error("Failed to load books:", e);
                    oView.getModel("booksModel").setProperty("/Books", []);
                }
            })();
        }
    });
});