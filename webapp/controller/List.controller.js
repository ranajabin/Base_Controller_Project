sap.ui.define([
    // "sap/ui/core/mvc/Controller"
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("table1.tablelistcontrollerproject.controller.List", {
            onInit: function () {
             //  this.onReadAll();
             debugger;
               this.onRead2();
            },

             onRead2: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("List").attachPatternMatched(this.onRouteMatch, this);
            },

            onRouteMatch: function() {
                this.onReadAll("MaraSet");
            },

            // onReadAll: function () {
            //     var that = this;

            //       var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPROJECT_TABLES_SRV/")
            //     // var oModel = that.getOwnerComponent().getModel();
            //     debugger;
            //     oModel.read("/UserSet", {
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

            onNavBack: function() {
                history.go(-1);
            },            
        });
    });
