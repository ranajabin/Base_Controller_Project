sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,MessageBox) {
        "use strict";

        return BaseController.extend("table1.tablelistcontrollerproject.controller.BaseController", {
            onInit: function () {             
               this.onReadAll();
            },

            onReadAll: function (entty) {
                var that = this;

                  var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEMPLOYEE_EEE_SRV/")
                // var oModel = that.getOwnerComponent().getModel();
              

            var tab = entty ;
            //  var tab = "userSet";
             // var tab = "MaraSet";
                oModel.read("/" + tab, {
                    success: function (odata1) {
                        var oModel1 = new sap.ui.model.json.JSONModel();

                        oModel1.setData(odata1);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success("Success");
                    },
                    error: function (oError) {
                        MessageBox.error("Error");
                    }
                });
            },

            // onReadAll1: function () {
            //     var that = this;

                //   var oModel11 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPROJECT_TABLES_SRV/")
                // var oModel11 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEMPLOYEE_EEE_SRV/")
                // var oModel = that.getOwnerComponent().getModel();
            //    debugger;
            //     oModel11.read("/MaraSet", {
            //         success: function (odata1) {
            //             var oModel1 = new sap.ui.model.json.JSONModel();

            //             oModel1.setData(odata1);
            //             that.getView().setModel(oModel1, "Data11");
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


