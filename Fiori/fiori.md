# What is Fiori? &  Why Fiori?

Before Fiori,
Traditional SAP UIs (like SAP GUI or WebDynpro) were used by the SAP DEVs, these SAP UIs:

Cluttered, transactional, and role-agnostic (Not being limited to a specific role, function, or system.).

Optimized for back-office clerks ( Administrative and support staff who don't interact with clients.), not business agility.

Tightly coupled to backend modules (no separation of concern).

>These are like "system of records".

Users are staring at gray, form-heavy screens, navigating via cryptic transaction codes like: ME23N, FB03 etc.

SAP GUI was powerful but brutal:
Every function buried under nested menus.
No guidance, no personalization.
Designed for SAP consultants, not end users.

>It was efficient for data clerks — disastrous for casual users

So, To make this vision real, SAP couldn’t rely on ABAP rendering anymore.
They built SAPUI5, a modern web framework (HTML5 + JS + CSS3) using MVC principles — similar in spirit to Angular or React, but enterprise-grade.

UI5 gave them:

- Component-based architecture
- Data-binding (JSON / OData)
- Declarative XML Views
- Reusable smart controls (tables, filters, charts)
- Customization via annotations

But UI5 alone was still too “developer-heavy” for typical SAP customers.
That’s where **Fiori Elements** entered — a layer above UI5 that rendered UI automatically based on *metadata*.

Fiori is a **design system** and **governance model** — a comprehensive **UX standard** defined by SAP. It dictates how enterprise apps should look, behave, and interact across devices and roles.

It includes:

**Design language** (color palettes, typography, icons, layouts)

**UX paradigms** (e.g., role-based, responsive, simple, coherent)

**Interaction patterns** (navigation, filters, object pages, lists, etc.)

**Floorplans and templates** (List Report, Object Page, Overview Page, etc.)

UI Guidelines & Governance Rules

Essentially, Fiori defines *“what good UX means in SAP.”*

**SAPUI5** (for SAP internal) or **OpenUI5** (open-source version) is the technical framework that implements Fiori’s design principles.

Think of UI5 as the execution engine for Fiori UX.

Fiori gives you rules and templates.

UI5 gives you controls, data binding, and APIs to build them

>*"Fiori uses the UI5 framework to implement its design language"*

>*Fiori transforms SAP from “system of record” to “system of engagement.”*

**What Fiori brings is :**

- **Role-based access** – every app is tailored to a specific persona.

- **Task-focused interaction** – fewer clicks, higher productivity.

- **Consistent design language** – one UX across all SAP apps.

- **OData-driven flexibility** – backend-agnostic UI via service contracts.

SAP built this design system around five design principles:

| Principle  | Meaning                                                                 |
|------------|-------------------------------------------------------------------------|
| Role-based | Each app is tailored for a business role (e.g., Sales Rep, Approver).  |
| Adaptive   | Works on desktop, tablet, mobile (responsive layout).                   |
| Coherent   | Unified interaction model and visuals.                                  |
| Simple     | Only the data and actions that matter — no noise.                       |
| Delightful | Subtle animations, predictable behavior, and modern aesthetics.         |
