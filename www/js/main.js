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

        FB.getLoginStatus(function(res) {
            debugger;

            // 로그인 하지 않았을 경우.
            if (res.status !== "connected") {

                FB.login(function(response) {

                    if (response.authResponse) {

                        console.log('Welcome!  Fetching your information.... ');

                        FB.api('/me', function(response) {
                            console.log('Good to see you, ' + response.name + '.');
                        });

                    } else {

                        console.log('User cancelled login or did not fully authorize.');

                    }
                    
                });

                // FB.api(
                //     '/5554992271234777',
                //     'GET', {},
                //     function(response) {
                //         debugger;

                //         // Insert your code here
                //     }
                // );

                // FB.login(function(response) {

                //     debugger;

                // });

                return;
            }


            // 로그인 했을 경우..


        });

    };

})(oAPP);

document.addEventListener("DOMContentLoaded", () => {

    oAPP.fn.fnOnInit();

});