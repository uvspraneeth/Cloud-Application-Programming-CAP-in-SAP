namespace com.uvs.bookshop;
using { cuid } from '@sap/cds/common';

entity books : cuid {
    title : String;
}   

entity authors : cuid {
    name : String;
}
