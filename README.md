# 🎓 SAP UI5 Routing & JSON Model — Learning Project

A **hands-on SAP UI5 learning project** built to understand and practice:
- JSON Model binding (default model vs named model)
- SAP UI5 XML Views and Controllers
- Client-side routing and navigation with parameters
- Binding context and navigating to detail pages

> 🧪 This is a structured practice project to strengthen SAP UI5 fundamentals
> before building enterprise Fiori applications.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | SAP UI5 (XML Views) |
| Data | Local JSON Model |
| Routing | sap.m.routing.Router |
| Controllers | SAP UI5 MVC Controllers |
| Tooling | SAP Fiori Tools, VS Code |

---

## 📐 App Structure

The app has 3 views connected via client-side routing:
```
View1 (Home)
  ├── Teachers Table  →  TeachersDetails (on row press)
  └── Students Table  →  StudentsDetails (on row press)
```

---

## 🧠 What I Learned — Key Concepts

### 1. Default Model vs Named Model
```javascript
// Default model — accessed with {property}
this.getView().setModel(oModel);

// Named model — accessed with {namedModel>property}
this.getView().setModel(oModel, "namedModel");
```
Both models point to the same `localData.json` but are bound differently
in XML views — this project demonstrates both patterns side by side.

### 2. Routing with Parameters
Navigating to a detail page and passing an ID as a URL parameter:
```javascript
this.getOwnerComponent().getRouter().navTo("TeachersDetails", {
    teacherId: sId
});
```

### 3. Pattern Matched — Reading Route Parameters
On the detail page, listening to route match and reading the parameter:
```javascript
oRouter.getRoute("TeachersDetails").attachPatternMatched(this._onObjectMatched, this);

_onObjectMatched: function(oEvent) {
    var teacherId = oEvent.getParameter("arguments").teacherId;
}
```

### 4. Binding Context
Reading the ID of a pressed row using binding context:
```javascript
// Named model context
var sId = oEvent.getSource().getBindingContext("namedModel").getProperty("id");

// Default model context
var sId = oEvent.getSource().getBindingContext().getProperty("id");
```

### 5. Finding and Binding Specific Data to Detail View
```javascript
var teachers = oModel.getProperty("/teachers");
var teacher = teachers.find(t => t.id == teacherId);
this.getView().setModel(new sap.ui.model.json.JSONModel(teacher));
```

---

## 📁 Project Structure
```
sap-ui5-routing-json-model/
├── webapp/
│   ├── controller/
│   │   ├── View1.controller.js          # Home — loads model, handles press events
│   │   ├── TeachersDetails.controller.js # Detail — reads route param, binds teacher
│   │   └── StudentsDetails.controller.js # Detail — reads route param, binds student
│   ├── view/
│   │   ├── App.view.xml                 # Root shell view
│   │   ├── View1.view.xml               # Home — Teachers & Students tables
│   │   ├── TeachersDetails.view.xml     # Teacher detail page
│   │   └── StudentsDetails.view.xml     # Student detail page
│   ├── model/
│   │   └── localData.json               # Local JSON data (teachers + students)
│   ├── i18n/
│   │   └── i18n.properties              # Internationalization strings
│   └── manifest.json                    # App descriptor — routing config
├── package.json
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js >= 18
- SAP Fiori Tools or UI5 CLI → `npm install -g @ui5/cli`

### Run Locally
```bash
git clone https://github.com/Piyush2276/sap-ui5-routing-json-model
cd sap-ui5-routing-json-model
npm install
npm start    # starts at http://localhost:8080
```

---

## 🗺️ Routing Config (manifest.json)

| Route | Pattern | Target |
|---|---|---|
| `RouteView1` | `:?query:` | `View1` (home) |
| `TeachersDetails` | `teachersDetails/{teacherId}` | `TeachersDetails` |
| `StudentsDetails` | `studentsDetails/{studentId}` | `StudentsDetails` |

---

## 📝 Key UI5 Concepts Demonstrated

- ✅ JSON Model — default and named model binding
- ✅ XML View data binding (`{property}` vs `{namedModel>property}`)
- ✅ `sap.m.Table` with `ColumnListItem` and `press` event
- ✅ Client-side routing with `sap.m.routing.Router`
- ✅ Passing and reading URL parameters (`teacherId`, `studentId`)
- ✅ `attachPatternMatched` for route lifecycle handling
- ✅ `getBindingContext()` to read pressed row data
- ✅ Dynamic model binding on detail views using `find()`
- ✅ `ObjectHeader` for detail page display

---

## 👤 Author

**Piyush Kumar**
SAP UI5 / SAP BTP Developer
📧 piyush2582002@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/piyush-kumar-267367229) |
[GitHub](https://github.com/Piyush2276)
