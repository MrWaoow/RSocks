/*
Template Name: RSocks - Startup & SaaS Bootstrap 5 Template.
Author: Mr. Waoow
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    //plus minus button
    $('.personal-new__buy-bill-item-count-input').prop('disabled', true);
    $(document).on('click', '.personal-new__buy-bill-item-count-btn.--plus', function () {
        $('.personal-new__buy-bill-item-count-input').val(parseInt($('.personal-new__buy-bill-item-count-input').val()) + 1);
    });
    $(document).on('click', '.personal-new__buy-bill-item-count-btn.--minus', function () {
        $('.personal-new__buy-bill-item-count-input').val(parseInt($('.personal-new__buy-bill-item-count-input').val()) - 1);
        if ($('.personal-new__buy-bill-item-count-input').val() == 0) {
            $('.personal-new__buy-bill-item-count-input').val(1);
        }
    });

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
})();