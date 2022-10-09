(() => {
    "use strict";

    let oAPP = {};

    oAPP.REMOTE = require('@electron/remote');
    oAPP.REMOTEMAIN = oAPP.REMOTE.require('@electron/remote/main');

    window.oAPP = oAPP;

})();