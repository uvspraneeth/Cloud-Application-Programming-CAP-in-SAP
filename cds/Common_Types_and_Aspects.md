# Common Types and Aspects

---
>**Created** by: **Venkata Sai Praneeth Uppala** \
Created on: 06-11-2025 \
Sources used: Capire [ca·pì·re], [source](https://cap.cloud.sap/docs/)
---

### @sap/cds/common

`CDS (Core Data Services) is a framework meant to define core business Data Domain Models and also Service Models. Moreover, It is Design time API.` \
When we install the [npm install @sap/cds-dk](https://www.npmjs.com/package/@sap/cds-dk) (CDS development kit - *a full fat cds, which comes with various development tools such as compiler, debugger, . etc*) CDS with a prebuilt model @sap/cds/common that provides common types and aspects for reuse [check out here](https://cap.cloud.sap/docs/cds/common#type-language).

> CDS **Aspects** and **Annotations** provide powerful means for separation of concerns. This greatly helps to keep our core domain model clean, while putting secondary concerns into separate files and model fragments.

All the common reuse features of [@sap/cds/common](https://cap.cloud.sap/docs/cds/common#type-language) are provided only through this ~100 line .cds model. Additional runtime support isn't required. @sap/cds/common merely uses basic CDS modeling features as well as generic features like **localized** data and **temporal** data (which only need minimal runtime support with minimal overhead).

# Common Reuse Aspects

*@sap/cds/common* provides follwing reusable **aspects** use in entity definitions. As said these greatly helps to keep our core domain model clean, moreover give you shortcuts, for concise and comprehensible models, interoperability and out-of-the-box runtime features connected to them.

### Aspect *`cuid`*

Use *`cuid`* as a convenient shortcut, to add canonical, universally unique primary keys to your entity definitions.

here the example:

```javascript
namepspace com.uvs;
using { cuid } from '@sap/cds/common'
entity Student : cuid {...}
```

```javascript
namepspace com.uvs;

entity Student {
    key ID : UUID;
    [...]
}
```

The service provider runtimes automatically fill in `UUID`-typed keys like these with auto-generated UUIDs.

Here is small note from [sap.cloud.doc](https://cap.cloud.sap/docs/cds/common#type-language), When to prefer the UUIDS:
> Use DB sequences only if you really deal with high data volumes. Otherwise, prefer UUIDs.

### Aspect *`managed`*

*Manage* is used to add 4 auditing/information managing records elements.

`created by/at & modified by/at elements.`

```javascript
namespace com.uvs
using { cuid } from '@sap/cds/common'
entity Student : managed {...}
```

```javascript
entity Student {
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : User      @cds.on.insert : $user;
  modifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update : $now;
  modifiedBy : User      @cds.on.insert : $user @cds.on.update : $user;
  [...]
}
```

> `modifiedAt` and `modifiedBy` are set whenever the respective row was modified, that means, also during *CREATE* operations.

*The annotations @cds.on.insert/update are handled in generic service providers so to fill in those fields automatically.*

### Aspect CodeList

This is the base definition for the code list entities in @sap/cds/common. It can also be used for your own code lists.

```javascript
// CodeList Aspect
aspect sap.common.CodeList {
  name  : localized String(111);
  descr : localized String(1111);
}
```

# Common Reuse Types

*@sap/cds/common* provides predefined easy-to-use types for Countries, Currencies, and Languages elements in your entity definition. We do use these types in all applications to foster interoperability (i.e, ease to integrate with the our entity in domain models)

### Type *`Country`*

In *@sap/cds/common* the reuse type *`Country`* is defined as a simple managed Association (To-One Association) to the code list for countries.

```javascript
// Common Code List of countries entity
entity sap.common.Countries : CodeList {
  key code : String(3); //> ISO 3166-1 alpha-2 codes (or alpha-3)
}
```

The country type is defined as to-one association to above code list

```
type Country : Association to sap.common.Countries;
```

```javascript
namespace com.uvs;
using { Country } from '@sap/cds/common';

entity StudentInfo{
    [..];
    country : Country; //> using resue type
}
```

The code lists define a key element code, which results in a foreign key column country_code in your SQL table for StudentInfo. For example:

```javascript
CREATE TABLE StudentInfo (
    ...,
    country_code NVARCHAR(3) -- foreign key
);
```

Similarly,

### Type *`Currency`*

Similar to *`Country`* type, it is defined as the managed-association to the code list **currencies**

```javascript
type Currency : Association to sap.common.Currencies;
```

### Type *`Language`*

Similar to *`Country`* type, it is defined as the managed-association to the code list **Languages**

```javascript
type Language : Association to sap.common.Languages;
```

### Type *`Timezone`*

Similar to *`Country`* type, it is defined as the managed-association to the code list **Timezones**

```javascript
type Timezone : Association to sap.common.Timezones;
```
---

