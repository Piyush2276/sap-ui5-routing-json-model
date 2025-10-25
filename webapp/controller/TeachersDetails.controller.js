sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("project1ui5.controller.TeachersDetails", {
    onInit: function () {
      //Task 3. understand this
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("TeachersDetails").attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      //Task 4. bind to a perticular data and using that data render a particular teachers details.
      var teacherId = oEvent.getParameter("arguments").teacherId;
      var oModel = this.getOwnerComponent().getModel("namedModel");
      var teachers = oModel.getProperty("/teachers");
      var teacher = teachers.find(t => t.id == teacherId);
      this.getView().setModel(new sap.ui.model.json.JSONModel(teacher));
    }
  });
});
