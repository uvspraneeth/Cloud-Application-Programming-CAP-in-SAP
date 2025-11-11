<IconTabBar id="idIconTabBar" expandable="false" select=".onSelectTab">
      <items>

    
<IconTabFilter id="author_tab" text="Authors" key="authors" icon="sap-icon://person-placeholder">
  <Table id="authorsTable" inset="false" growing="true" items="{authorsModel>/Authors}">
    <columns>
      <Column id="authoridcol">
        <Text id="author_id" text="Author ID" />
      </Column>
      <Column id="authorcol">
        <Text id="author_name" text="Name" />
      </Column>
    </columns>
    <items>
      <ColumnListItem id="author_col_listitem">
        <cells>
          <Text id="author_id_val" text="{authorsModel>ID}" />
          <Text id="author_name_val" text="{authorsModel>name}" />
        </cells>
      </ColumnListItem>
    </items>
  </Table>
</IconTabFilter>

<!-- Books Tab -->
<IconTabFilter id="book_tab" text="Books" key="books" icon="sap-icon://learning-assistant">
  <Table id="booksTable" inset="false" growing="true" items="{booksModel>/Books}">
    <columns>
      <Column id="book_idcol">
        <Text id="book_id" text="Book ID" />
      </Column>
      <Column id="book_titlecol">
        <Text id="book_title" text="Title" />
      </Column>
    </columns>
    <items>
      <ColumnListItem id="book_col_listitem">
        <cells>
          <Text id="book_ID_val" text="{booksModel>ID}" />
          <Text id="book_title_val" text="{booksModel>title}" />
        </cells>
      </ColumnListItem>
    </items>
  </Table>
</IconTabFilter>

</items>
</IconTabBar>
-->

<!-- Json Model>
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
}); />
