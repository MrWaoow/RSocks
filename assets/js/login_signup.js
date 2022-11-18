/*
Template Name: RSocks - Startup & SaaS Bootstrap 5 Template.
Author: Mr. Waoow
*/

/*$(function() {
    const loginBtn = document.getElementById("login-form-link");
    const signupBtn = document.getElementById("signup-form-link");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginBtn.addEventListener("click", (event) => {
        loginForm.delay(100).fadeIn(100);
        signupForm.fadeOut(100);
        signupBtn.classList.remove("active");
        loginBtn.classList.add("active");
        event.preventDefault();
    });
    signupBtn.addEventListener("click", (event) => {
        signupForm.delay(100).fadeIn(100);
        loginForm.fadeOut(100);
        loginBtn.classList.remove("active");
        signupBtn.classList.add("active");
        event.preventDefault();
    });

});*/
const loginBtn = document.getElementById("login-form-link");
const signupBtn = document.getElementById("signup-form-link");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const onClickLoginBtn = () => {
    signupBtn.classList.remove("active");
    loginBtn.classList.add("active");
};
const onClickSignupBtn = () => {
    loginBtn.classList.remove("active");
    signupBtn.classList.add("active");
};