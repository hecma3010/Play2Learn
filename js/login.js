/* jshint esversion: 6 */

/* DOM elements */

const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');
const loginEmailInput = document.getElementById('login-email');
const registerEmailInput = document.getElementById('register-email');

/* Form switching */

const showRegisterForm = () => {
    loginSection.hidden = true;
    registerSection.hidden = false;
    registerEmailInput.focus();
};
const showLoginForm = () => {
    loginSection.hidden = false;
    registerSection.hidden = true;
    loginEmailInput.focus();
};

/* Event listeners */

showRegisterButton.addEventListener('click', showRegisterForm);
showLoginButton.addEventListener('click', showLoginForm);

