sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("table1.tablelistcontrollerproject.controller.Table", {
            onInit: function () {
                this.onRead1();
            },

            onRead1: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Table").attachPatternMatched(this.onObjectMatch, this);
            },

            onObjectMatch: function () {
                this.onReadAll("userSet");
            },

            onPress: function () {
                debugger;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("List");
            },

            // onReadAll: function () {
            //     var that = this;

            //     //   var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEMPLOYEE_EEE_SRV/")
            //     var oModel = that.getOwnerComponent().getModel();
            //     debugger;
            //     oModel.read("/userSet", {
            //         success: function (odata1) {
            //             var oModel1 = new sap.ui.model.json.JSONModel();

            //             oModel1.setData(odata1);
            //             that.getView().setModel(oModel1, "Data1");
            //             MessageBox.success("Success");
            //             //  alert("Success");
            //         },
            //         error: function (oError) {
            //             MessageBox.error("Error");
            //             //   alert("Error");
            //         }
            //     });
            // },                 
        });
    });
