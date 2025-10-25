sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1ui5.controller.View1", {

        onInit: function () {
            
            //Task 1. understand this 
            var oModel = new sap.ui.model.json.JSONModel("./model/localData.json");
            this.getView().setModel(oModel);
            this.getView().setModel(oModel, "namedModel");
        },
        

        onTeacherPress: function (oEvent) { 
            //Task 2. understand this
            var sId = oEvent.getSource().getBindingContext("namedModel").getProperty("id");
            this.getOwnerComponent().getRouter().navTo("TeachersDetails", { teacherId: sId });
        },


        onStudentPress: function (oEvent) {
            var sId = oEvent.getSource().getBindingContext().getProperty("id");
            //this.getOwnerComponent().getRouter().navTo("StudentsDetails", { studentId: sId });

            	productPath = oEvent.getSource().getSelectedItem().getBindingContext("products").getPath(),
				product = productPath.split("/").slice(-1).pop();

			//this.oRouter.navTo("detail", {layout: oNextUIState.layout, product: product});
        }
    });
});