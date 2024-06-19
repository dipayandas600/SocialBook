document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let error = document.getElementById('login-error');

    // Add your login logic here

    if (email === "" || password === "") {
        error.textContent = 'Please fill in all fields';
    } else {
        error.textContent = '';
        alert('Logged in successfully');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm-password').value;
    let error = document.getElementById('signup-error');

    if (password !== confirmPassword) {
        error.textContent = 'Passwords do not match';
        return;
    }

    // Add your signup logic here

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        error.textContent = 'Please fill in all fields';
    } else {
        error.textContent = '';
        alert('Signed up successfully');
    }
});

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Show login form by default
showLogin();