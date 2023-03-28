/*
    ---------------------------------------------------------------------

    Template Name: Digibiz
    Template Description: Digibiz - HTML Template
    Version: 1.0
    Template Author: Rahul Kaklotar

    ---------------------------------------------------------------------

    JS INDEX
    ================
	1. Scroll Navbar
	2. Menu On Hover
	3. Preloader
    4. Back To Top
	5. Portfolio Lightbox (Home Page)
	6. Our Team Collpase
    7. Project Filter
    8. Faq (Pricing Page) 
    9. Project Lightbox (Project Page)


 */

(function($) {
    "use strict";

    // 1. Scroll Navbar
    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });


    //2. Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 991) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    // 3. Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(500).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // 4. Back To Top
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

    // 5.Project Lightbox (Home Page)
    const portfolioLightbox = GLightbox({
        selector: '.glightbox'
    });

    // 6. Our Team Collpase  
    $(".our-team #accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("bx-minus bx-plus");
    });

    // 7. Project Filter
    $(function() {
        var filterList = {
            init: function() {
                $('.portfolio-grid').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: 'all' // show app tab on first load
                    }
                });
            }
        };
        filterList.init();
    });
    // 8. Faq (Pricing Page) 
    $(".faq #accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("bx-caret-up bx-caret-down");
    });

    // 9.Project Lightbox (Project Page)
    const portfolioLightbox1 = GLightbox({
        selector: '.projectbox'
    });
})(jQuery);