let UAHBalance = 100000;
let USDBalance = 5000;
let EURBalance = 5000;
let PLNBalance = 3000;
let GBPBalance = 5000;
let CZKBalance = 1000;
let CADBalance = 200 ;
let CHFBalance = 1000;
let SEKBalance = 500 ;

let USDbuyKurs = 38.20;
let EURbuyKurs = 41.70;
let PLNbuyKurs = 9.60 ;
let GBPbuyKurs = 48.50;
let CZKbuyKurs = 1.600;
let CADbuyKurs = 27.80;
let CHFbuyKurs = 43.60;
let SEKbuyKurs = 3.400;

let USDsellKurs = 38.70;
let EURsellKurs = 42.20;
let PLNsellKurs = 9.80 ;
let GBPsellKurs = 49.00;
let CZKsellKurs = 1.660;
let CADsellKurs = 28.40;
let CHFsellKurs = 44.20;
let SEKsellKurs = 3.650;

let EURbuyUSDKurs = 1.0900;
let PLNbuyUSDKurs = 3.970 ;
let CZKbuyUSDKurs = 23.60 ;
let EURsellUSDKurs = 1.0930;
let PLNsellUSDKurs = 3.930;
let CZKsellUSDKurs = 23.20;



EURbuyUSD = EURbuyUSD.toFixed(4);
PLNbuyUSD = PLNbuyUSD.toFixed(3);
CZKbuyUSD = CZKbuyUSD.toFixed(3);
EURsellUSD = EURsellUSD.toFixed(4);
PLNsellUSD = PLNsellUSD.toFixed(3);
CZKsellUSD = CZKsellUSD.toFixed(2);


USDbuyKurs = USDbuyKurs.toFixed(2);
EURbuyKurs = EURbuyKurs.toFixed(2);
PLNbuyKurs = PLNbuyKurs.toFixed(2);
GBPbuyKurs = GBPbuyKurs.toFixed(2);
CZKbuyKurs = CZKbuyKurs.toFixed(3);
CADbuyKurs = CADbuyKurs.toFixed(2);
CHFbuyKurs = CHFbuyKurs.toFixed(2);
SEKbuyKurs = SEKbuyKurs.toFixed(3);

USDsellKurs = USDsellKurs.toFixed(2);
EURsellKurs = EURsellKurs.toFixed(2);
PLNsellKurs = PLNsellKurs.toFixed(2);
GBPsellKurs = GBPsellKurs.toFixed(2);
CZKsellKurs = CZKsellKurs.toFixed(3);
CADsellKurs = CADsellKurs.toFixed(2);
CHFsellKurs = CHFsellKurs.toFixed(2);
SEKsellKurs = SEKsellKurs.toFixed(3);

EURbuyUSDKurs = EURbuyUSDKurs.toFixed(4);
PLNbuyUSDKurs = PLNbuyUSDKurs.toFixed(3);
CZKbuyUSDKurs = CZKbuyUSDKurs.toFixed(2);
EURsellUSDKurs = EURsellUSDKurs.toFixed(4);
PLNsellUSDKurs = PLNsellUSDKurs.toFixed(3);
CZKsellUSDKurs = CZKsellUSDKurs.toFixed(2);

document.addEventListener("DOMContentLoaded", function() {
    updateNumber("UAHBalance", UAHBalance);
    updateNumber("USDBalance", USDBalance);
    updateNumber("EURBalance", EURBalance);
    updateNumber("PLNBalance", PLNBalance);
    updateNumber("GBPBalance", GBPBalance);
    updateNumber("CZKBalance", CZKBalance);
    updateNumber("CADBalance", CADBalance);
    updateNumber("CHFBalance", CHFBalance);
    updateNumber("SEKBalance", SEKBalance);

    updateNumber("USDbuyKurs", USDbuyKurs);
    updateNumber("EURbuyKurs", EURbuyKurs);
    updateNumber("PLNbuyKurs", PLNbuyKurs);
    updateNumber("GBPbuyKurs", GBPbuyKurs);
    updateNumber("CZKbuyKurs", CZKbuyKurs);
    updateNumber("CADbuyKurs", CADbuyKurs);
    updateNumber("CHFbuyKurs", CHFbuyKurs);
    updateNumber("SEKbuyKurs", SEKbuyKurs);

    updateNumber("USDsellKurs", USDsellKurs);
    updateNumber("EURsellKurs", EURsellKurs);
    updateNumber("PLNsellKurs", PLNsellKurs);
    updateNumber("GBPsellKurs", GBPsellKurs);
    updateNumber("CZKsellKurs", CZKsellKurs);
    updateNumber("CADsellKurs", CADsellKurs);
    updateNumber("CHFsellKurs", CHFsellKurs);
    updateNumber("SEKsellKurs", SEKsellKurs);

    updateNumber("EURbuyUSDKurs", EURbuyUSDKurs);
    updateNumber("PLNbuyUSDKurs", PLNbuyUSDKurs);
    updateNumber("CZKbuyUSDKurs", CZKbuyUSDKurs);
    updateNumber("EURsellUSDKurs", EURsellUSDKurs);
    updateNumber("PLNsellUSDKurs", PLNsellUSDKurs);
    updateNumber("CZKsellUSDKurs", CZKsellUSDKurs);
});


function updateNumber(id, number) {
    document.getElementById(id).textContent = number;
}




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you should perform authentication on the server side
    // For this example, let's just check if username and password are not empty
    if (username === "a" && password === "1") {
        // If authentication is successful, redirect to another website
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
});

// Prevent form submission on Enter key press in input fields
document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});
document.getElementById('logoutButton').addEventListener('click', function() {
    // Здесь можно добавить дополнительные действия при выходе, если необходимо
    // Например, отправить запрос на сервер для завершения сеанса
    // После этого можно перенаправить пользователя на страницу входа или другую страницу

    // Пример перенаправления на страницу входа
    window.location.href = 'index.html';
});