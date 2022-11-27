/*
Template Name: RSocks - Startup & SaaS Bootstrap 5 Template.
Author: Mr. Waoow
*/
const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

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


//chats
const addChat = () => {
    const chats = document.getElementById("Chats");
    const time = formatAMPM(new Date);
    const massage = document.getElementById("Massage");
    const chat = `
                                            <div class="chat">
                                                <div class="chat-avatar">
                                                    <a class="avatar" data-toggle="tooltip" href="#" data-placement="right"
                                                        title="" data-original-title="Clients">
                                                        <img src="assets/images/dashboard/chat/Client.png">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-content">
                                                        <p>
                                                            ${massage.value}
                                                        </p>
                                                        <time class="chat-time">${time}</time>
                                                    </div>
                                                </div>
                                            </div>
    `
    if (massage.value != "")
        chats.innerHTML += chat;
        massage.value = "";
};

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
        document.getElementById("datetime1").innerHTML = (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (("0" + dt.getDate()).slice(-2)) + "  " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + " GMT+2";
    }
    //Login, pass, op lable
    const username = document.getElementById("Usernaem");
    const password = document.getElementById("Password");
    const Ip = document.getElementById("IP");
    const userLabel = document.getElementById("UserLabel");
    const passLabel = document.getElementById("PassLabel");
    const IpLabel = document.getElementById("IpLabel");
    if (userLabel) {
        userLabel.innerHTML = username.value;
        passLabel.innerHTML = password.value;
        IpLabel.innerHTML = Ip.value;
    }
})(jQuery);
