(function ($) {
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



    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });

    //Time and Date
    var dt = new Date();
    document.getElementById("datetime").innerHTML = (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (("0" + dt.getDate()).slice(-2)) + "  " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + " GMT+2";

})(jQuery);

