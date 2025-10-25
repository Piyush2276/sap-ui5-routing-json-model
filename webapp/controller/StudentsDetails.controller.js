sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("project1ui5.controller.StudentsDetails", {
    onInit: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("StudentsDetails").attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      var studentId = oEvent.getParameter("arguments").studentId;
      var oModel = this.getOwnerComponent().getModel();
      var students = oModel.getProperty("/students");
      var student = students.find(s => s.id == studentId);
      this.getView().setModel(new sap.ui.model.json.JSONModel(student));
    }
  });
});
