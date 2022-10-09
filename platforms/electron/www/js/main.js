let oAPP = parent.oAPP;

((oAPP) => {
    "use strict";

    oAPP.fn = {};

    oAPP.fn.fnOnInit = () => {

        sap.ui.getCore().attachInit(() => {

            oAPP.fn.fnOnInitRendering();

        });

    };

    oAPP.fn.fnOnInitRendering = () => {

        let oApp = new sap.m.App({

            pages: oAPP.fn.fnGetPages()

        });

        oApp.placeAt("content");

    };

    oAPP.fn.fnGetPages = () => {

        let oPage1 = new sap.m.Page({

            title: "faceBook Test",

            content: [

                new sap.m.Button({
                    text: "faceLogin",
                    press: oAPP.fn.ev_Login
                })



            ]

        }).addStyleClass("sapUiContentPadding");


        return [
            oPage1

        ];

    };


    oAPP.fn.ev_Login = () => {

        sap.m.MessageToast.show("login!!");
        


    };

})(oAPP);

document.addEventListener("DOMContentLoaded", () => {

    oAPP.fn.fnOnInit();

});