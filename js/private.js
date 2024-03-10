function logout() {
    window.location.href = "../html/index.html";
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you should perform authentication on the server side
    // For this example, let's just check if username and password are not empty
    if (username === "a" && password === "1") {
        // If authentication is successful, redirect to another website
        window.location.href = '../html/main.html';
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
