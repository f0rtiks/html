//USD

// Купівля USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("USDBalance", USDBalance);
    updateNumber("USDbuyKurs", USDbuyKurs.toFixed(2));

    document.getElementById("buyUSD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyUSD = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            USDbuyKurs = parseFloat(document.getElementById("USDbuyKurs").textContent);

            if (!isNaN(buyUSD)) {
                UAHBalance -= buyUSD * USDbuyKurs;
                USDBalance += buyUSD;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("USDbuyKurs", USDbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("USDBalance", USDBalance);
    updateNumber("USDsellKurs", USDsellKurs.toFixed(2));

    document.getElementById("sellUSD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellUSD = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            USDsellKurs = parseFloat(document.getElementById("USDsellKurs").textContent);

            if (!isNaN(sellUSD)) {
                UAHBalance += sellUSD * USDsellKurs;
                USDBalance -= sellUSD;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("USDsellKurs", USDsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});




//EUR

// Купівля EUR
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("EURBalance", EURBalance);
    updateNumber("EURbuyKurs", EURbuyKurs.toFixed(2));

    document.getElementById("buyEUR").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyEUR = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            EURBalance = parseFloat(document.getElementById("EURBalance").textContent);
            EURbuyKurs = parseFloat(document.getElementById("EURbuyKurs").textContent);

            if (!isNaN(buyEUR)) {
                UAHBalance -= buyEUR * EURbuyKurs;
                EURBalance += buyEUR;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("EURBalance", EURBalance.toFixed(0));
                updateNumber("EURbuyKurs", EURbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж EUR
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("EURBalance", EURBalance);
    updateNumber("EURsellKurs", EURsellKurs.toFixed(2));

    document.getElementById("sellEUR").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellEUR = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            EURBalance = parseFloat(document.getElementById("EURBalance").textContent);
            EURsellKurs = parseFloat(document.getElementById("EURsellKurs").textContent);

            if (!isNaN(sellEUR)) {
                UAHBalance += sellEUR * EURsellKurs;
                EURBalance -= sellEUR;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("EURBalance", EURBalance.toFixed(0));
                updateNumber("EURsellKurs", EURsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});





//PLN

// Купівля PLN
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("PLNBalance", PLNBalance);
    updateNumber("PLNbuyKurs", PLNbuyKurs.toFixed(2));

    document.getElementById("buyPLN").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyPLN = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            PLNBalance = parseFloat(document.getElementById("PLNBalance").textContent);
            PLNbuyKurs = parseFloat(document.getElementById("PLNbuyKurs").textContent);

            if (!isNaN(buyPLN)) {
                UAHBalance -= buyPLN * PLNbuyKurs;
                PLNBalance += buyPLN;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("PLNBalance", PLNBalance.toFixed(0));
                updateNumber("PLNbuyKurs", PLNbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж PLN
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("PLNBalance", PLNBalance);
    updateNumber("PLNsellKurs", PLNsellKurs.toFixed(2));

    document.getElementById("sellPLN").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellPLN = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            PLNBalance = parseFloat(document.getElementById("PLNBalance").textContent);
            PLNsellKurs = parseFloat(document.getElementById("PLNsellKurs").textContent);

            if (!isNaN(sellPLN)) {
                UAHBalance += sellPLN * PLNsellKurs;
                PLNBalance -= sellPLN;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("PLNBalance", PLNBalance.toFixed(0));
                updateNumber("PLNsellKurs", PLNsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});




//GBP

// Купівля GBP
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("GBPBalance", GBPBalance);
    updateNumber("GBPbuyKurs", GBPbuyKurs.toFixed(2));

    document.getElementById("buyGBP").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyGBP = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            GBPBalance = parseFloat(document.getElementById("GBPBalance").textContent);
            GBPbuyKurs = parseFloat(document.getElementById("GBPbuyKurs").textContent);

            if (!isNaN(buyGBP)) {
                UAHBalance -= buyGBP * GBPbuyKurs;
                GBPBalance += buyGBP;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("GBPBalance", GBPBalance.toFixed(0));
                updateNumber("GBPbuyKurs", GBPbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж GBP
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("GBPBalance", GBPBalance);
    updateNumber("GBPsellKurs", GBPsellKurs.toFixed(2));

    document.getElementById("sellGBP").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellGBP = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            GBPBalance = parseFloat(document.getElementById("GBPBalance").textContent);
            GBPsellKurs = parseFloat(document.getElementById("GBPsellKurs").textContent);

            if (!isNaN(sellGBP)) {
                UAHBalance += sellGBP * GBPsellKurs;
                GBPBalance -= sellGBP;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("GBPBalance", GBPBalance.toFixed(0));
                updateNumber("GBPsellKurs", GBPsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});



//CZK

// Купівля CZK
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CZKBalance", CZKBalance);
    updateNumber("CZKbuyKurs", CZKbuyKurs.toFixed(2));

    document.getElementById("buyCZK").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyCZK = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CZKBalance = parseFloat(document.getElementById("CZKBalance").textContent);
            CZKbuyKurs = parseFloat(document.getElementById("CZKbuyKurs").textContent);

            if (!isNaN(buyCZK)) {
                UAHBalance -= buyCZK * CZKbuyKurs;
                CZKBalance += buyCZK;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CZKBalance", CZKBalance.toFixed(0));
                updateNumber("CZKbuyKurs", CZKbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж CZK
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CZKBalance", CZKBalance);
    updateNumber("CZKsellKurs", CZKsellKurs.toFixed(2));

    document.getElementById("sellCZK").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellCZK = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CZKBalance = parseFloat(document.getElementById("CZKBalance").textContent);
            CZKsellKurs = parseFloat(document.getElementById("CZKsellKurs").textContent);

            if (!isNaN(sellCZK)) {
                UAHBalance += sellCZK * CZKsellKurs;
                CZKBalance -= sellCZK;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CZKBalance", CZKBalance.toFixed(0));
                updateNumber("CZKsellKurs", CZKsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});




//CAD

// Купівля CAD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CADBalance", CADBalance);
    updateNumber("CADbuyKurs", CADbuyKurs.toFixed(2));

    document.getElementById("buyCAD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyCAD = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CADBalance = parseFloat(document.getElementById("CADBalance").textContent);
            CADbuyKurs = parseFloat(document.getElementById("CADbuyKurs").textContent);

            if (!isNaN(buyCAD)) {
                UAHBalance -= buyCAD * CADbuyKurs;
                CADBalance += buyCAD;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CADBalance", CADBalance.toFixed(0));
                updateNumber("CADbuyKurs", CADbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж CAD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CADBalance", CADBalance);
    updateNumber("CADsellKurs", CADsellKurs.toFixed(2));

    document.getElementById("sellCAD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellCAD = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CADBalance = parseFloat(document.getElementById("CADBalance").textContent);
            CADsellKurs = parseFloat(document.getElementById("CADsellKurs").textContent);

            if (!isNaN(sellCAD)) {
                UAHBalance += sellCAD * CADsellKurs;
                CADBalance -= sellCAD;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CADBalance", CADBalance.toFixed(0));
                updateNumber("CADsellKurs", CADsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});




//CHF

// Купівля CHF
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CHFBalance", CHFBalance);
    updateNumber("CHFbuyKurs", CHFbuyKurs.toFixed(2));

    document.getElementById("buyCHF").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyCHF = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CHFBalance = parseFloat(document.getElementById("CHFBalance").textContent);
            CHFbuyKurs = parseFloat(document.getElementById("CHFbuyKurs").textContent);

            if (!isNaN(buyCHF)) {
                UAHBalance -= buyCHF * CHFbuyKurs;
                CHFBalance += buyCHF;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CHFBalance", CHFBalance.toFixed(0));
                updateNumber("CHFbuyKurs", CHFbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж CHF
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("CHFBalance", CHFBalance);
    updateNumber("CHFsellKurs", CHFsellKurs.toFixed(2));

    document.getElementById("sellCHF").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellCHF = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            CHFBalance = parseFloat(document.getElementById("CHFBalance").textContent);
            CHFsellKurs = parseFloat(document.getElementById("CHFsellKurs").textContent);

            if (!isNaN(sellCHF)) {
                UAHBalance += sellCHF * CHFsellKurs;
                CHFBalance -= sellCHF;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("CHFBalance", CHFBalance.toFixed(0));
                updateNumber("CHFsellKurs", CHFsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});



//SEK

// Купівля SEK
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("SEKBalance", SEKBalance);
    updateNumber("SEKbuyKurs", SEKbuyKurs.toFixed(2));

    document.getElementById("buySEK").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buySEK = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            SEKBalance = parseFloat(document.getElementById("SEKBalance").textContent);
            SEKbuyKurs = parseFloat(document.getElementById("SEKbuyKurs").textContent);

            if (!isNaN(buySEK)) {
                UAHBalance -= buySEK * SEKbuyKurs;
                SEKBalance += buySEK;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("SEKBalance", SEKBalance.toFixed(0));
                updateNumber("SEKbuyKurs", SEKbuyKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж SEK
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("SEKBalance", SEKBalance);
    updateNumber("SEKsellKurs", SEKsellKurs.toFixed(2));

    document.getElementById("sellSEK").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellSEK = parseFloat(this.value);
            UAHBalance = parseFloat(document.getElementById("UAHBalance").textContent);
            SEKBalance = parseFloat(document.getElementById("SEKBalance").textContent);
            SEKsellKurs = parseFloat(document.getElementById("SEKsellKurs").textContent);

            if (!isNaN(sellSEK)) {
                UAHBalance += sellSEK * SEKsellKurs;
                SEKBalance -= sellSEK;

                updateNumber("UAHBalance", UAHBalance.toFixed(0));
                updateNumber("SEKBalance", SEKBalance.toFixed(0));
                updateNumber("SEKsellKurs", SEKsellKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});



//EUR/USD

// Купівля EUR/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("USDBalance", USDBalance);
    updateNumber("EURBalance", EURBalance);
    updateNumber("EURbuyUSDKurs", EURbuyUSDKurs.toFixed(4));

    document.getElementById("buyEUR_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyEURUSD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            EURBalance = parseFloat(document.getElementById("EURBalance").textContent);
            EURbuyUSDKurs = parseFloat(document.getElementById("EURbuyUSDKurs").textContent);

            if (!isNaN(buyEURUSD)) {
                USDBalance -= buyEURUSD / EURbuyUSDKurs;
                EURBalance += buyEURUSD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("EURBalance", EURBalance.toFixed(0));
                updateNumber("EURbuyUSDKurs", EURbuyUSDKurs.toFixed(4));
                this.value = '';
            }
        }
    });
});


// Продаж EUR/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("USDBalance", USDBalance);
    updateNumber("EURBalance", EURBalance);
    updateNumber("EURsellUSDKurs", EURsellUSDKurs.toFixed(4));

    document.getElementById("sellEUR_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellEURUSD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            EURBalance = parseFloat(document.getElementById("EURBalance").textContent);
            EURsellUSDKurs = parseFloat(document.getElementById("EURsellUSDKurs").textContent);

            if (!isNaN(sellEURUSD)) {
                USDBalance += sellEURUSD / EURbuyUSDKurs;
                EURBalance -= sellEURUSD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("EURBalance", EURBalance.toFixed(0));
                updateNumber("EURsellUSDKurs", EURsellUSDKurs.toFixed(4));
                this.value = '';
            }
        }
    });
});



//PLN/USD

// Купівля PLN/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("PLNBalance", PLNBalance);
    updateNumber("USDBalance", USDBalance);
    updateNumber("PLNbuyUSDKurs", PLNbuyUSDKurs.toFixed(3));

    document.getElementById("buyPLN_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyPLN_USD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            PLNBalance = parseFloat(document.getElementById("PLNBalance").textContent);
            PLNbuyUSDKurs = parseFloat(document.getElementById("PLNbuyUSDKurs").textContent);

            if (!isNaN(buyPLN_USD)) {
                USDBalance -= buyPLN_USD / PLNbuyUSDKurs;
                PLNBalance += buyPLN_USD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("PLNBalance", PLNBalance.toFixed(0));
                updateNumber("PLNbuyUSDKurs", PLNbuyUSDKurs.toFixed(3));
                this.value = '';
            }
        }
    });
});


// Продаж PLN/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("USDBalance", USDBalance);
    updateNumber("PLNBalance", PLNBalance);
    updateNumber("PLNsellUSDKurs", PLNsellUSDKurs.toFixed(3));

    document.getElementById("sellPLN_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellPLN_USD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            PLNBalance = parseFloat(document.getElementById("PLNBalance").textContent);
            PLNsellUSDKurs = parseFloat(document.getElementById("PLNsellUSDKurs").textContent);

            if (!isNaN(sellPLN_USD)) {
                USDBalance += sellPLN_USD / PLNsellUSDKurs;
                PLNBalance -= sellPLN_USD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("PLNBalance", PLNBalance.toFixed(0));
                updateNumber("PLNsellUSDKurs", PLNsellUSDKurs.toFixed(3));
                this.value = '';
            }
        }
    });
});



//CZK/USD

// Купівля CZK/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("CZKBalance", CZKBalance);
    updateNumber("USDBalance", USDBalance);
    updateNumber("CZKbuyUSDKurs", CZKbuyUSDKurs.toFixed(2));

    document.getElementById("buyCZK_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let buyCZK_USD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            CZKBalance = parseFloat(document.getElementById("CZKBalance").textContent);
            CZKbuyUSDKurs = parseFloat(document.getElementById("CZKbuyUSDKurs").textContent);

            if (!isNaN(buyCZK_USD)) {
                USDBalance -= buyCZK_USD / CZKbuyUSDKurs;
                CZKBalance += buyCZK_USD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("CZKBalance", CZKBalance.toFixed(0));
                updateNumber("CZKbuyUSDKurs", CZKbuyUSDKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});


// Продаж CZK/USD
document.addEventListener("DOMContentLoaded", function() {
    updateNumber("USDBalance", USDBalance);
    updateNumber("CZKBalance", CZKBalance);
    updateNumber("CZKsellUSDKurs", CZKsellUSDKurs.toFixed(2));

    document.getElementById("sellCZK_USD").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let sellCZK_USD = parseFloat(this.value);
            USDBalance = parseFloat(document.getElementById("USDBalance").textContent);
            CZKBalance = parseFloat(document.getElementById("CZKBalance").textContent);
            CZKsellUSDKurs = parseFloat(document.getElementById("CZKsellUSDKurs").textContent);

            if (!isNaN(sellCZK_USD)) {
                USDBalance += sellCZK_USD / CZKsellUSDKurs;
                CZKBalance -= sellCZK_USD;

                updateNumber("USDBalance", USDBalance.toFixed(0));
                updateNumber("CZKBalance", CZKBalance.toFixed(0));
                updateNumber("CZKsellUSDKurs", CZKsellUSDKurs.toFixed(2));
                this.value = '';
            }
        }
    });
});