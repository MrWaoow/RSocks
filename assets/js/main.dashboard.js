/*
Template Name: RSocks - Startup & SaaS Bootstrap 5 Template.
Author: Mr. Waoow
*/

const toggleIp = $("#toggle-ip");
const loginPassContainer = document.getElementById("LoginPassContainer");
const iPContainer = document.getElementById("IpContainer");
const loginPass = document.getElementById("login-pass");
const iP = document.getElementById("ip");
const labelContainer = document.getElementById("LabelContainer");
const formContainer = document.getElementById("FormContainer");
const spin = document.getElementById("spinner");
const myStyles = `    opacity: 0.7;visibility: visible;`;
const defaultStyles = `    opacity: 0;visibility: hidden;`;

// Switch to form container
const showHideFormContainer = () => {
    if (labelContainer.classList.contains("hidden")) {
        labelContainer.classList.remove("hidden");
        formContainer.classList.add("hidden");
    } else {
        formContainer.classList.remove("hidden");
        labelContainer.classList.add("hidden");
    }
};

// IP Toggler
const toggleIpOn = () => {
    setTimeout(() => {
        loginPass.classList.add("hidden");
        iP.classList.remove("hidden");
        loginPassContainer.classList.add("hidden");
        iPContainer.classList.remove("hidden");
        labelContainer.classList.remove("hidden");
        formContainer.classList.add("hidden");
        spin.style.cssText = defaultStyles;
    }, 5000);
};
const toggleIpOff = () => {

    setTimeout(() => {
        iP.classList.add("hidden");
        loginPass.classList.remove("hidden");
        iPContainer.classList.add("hidden");
        loginPassContainer.classList.remove("hidden");
        labelContainer.classList.remove("hidden");
        formContainer.classList.add("hidden");
        spin.style.cssText = defaultStyles;
    }, 5000);

};

toggleIp.change(() => {
    if (iP.classList.contains("hidden")) {
        spin.style.cssText = myStyles;
        toggleIpOn();
    } else {
        spin.style.cssText = myStyles;
        toggleIpOff();
    }
});

(($) => {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    const sidebarToggler = document.getElementById("Sidebar-Toggler");
    const testClass = "open";
    var sidBar = document.getElementById("sidebar");
    var classNamesArr = sidBar.className.split(/\s/);
    sidebarToggler.addEventListener("click", () => {
        $('.sidebar, .content').toggleClass("open");
        sidBar = document.getElementById("sidebar");
        classNamesArr = sidBar.className.split(/\s/);
        return false;
    });
    document.addEventListener("click", () => {
        if (classNamesArr.includes(testClass) && $(window).width() < 991.98) {
            $('.sidebar, .content').removeClass("open");
            return false;
        }
        else
            return false;
    });
    sidebarToggler.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    sidBar.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    //Time and Date
    var dt = new Date();
    if (document.getElementById("datetime")) {
        document.getElementById("datetime").innerHTML = (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (("0" + dt.getDate()).slice(-2)) + "  " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + " GMT+2";
    }
    //Login, pass, op lable
    const username = document.getElementById("Usernaem");
    const password = document.getElementById("Password");
    const Ip = document.getElementById("IP");
    const userLabel = document.getElementById("UserLabel");
    const passLabel = document.getElementById("PassLabel");
    const IpLabel = document.getElementById("IpLabel");

    userLabel.innerHTML = username.value;
    passLabel.innerHTML = password.value;
    IpLabel.innerHTML = Ip.value;

})(jQuery);