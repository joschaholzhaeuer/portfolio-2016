/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

$(document).ready(function($) {

    var $backToTop = $('.cd-top'),
        offset = ( $('.project-grid').offset().top ) + 100;

    //fadeInSection();

    $(window).on('scroll', function() {
        backToTop();
        //fadeInElement();
    });

    function backToTop() {
        if ( $(this).scrollTop() > offset ) {
            $backToTop.removeClass('is-invisible');

        } else {
            $backToTop.addClass('is-invisible');
        }
    }

    function fadeInSection() {
        $('.element-fade-now').animate({
                    'opacity': '1'
                }, 600);
    }

    function fadeInElement() {
        $('.element-fade').each(function () {

            var offsetOfObject = $(this).offset().top;
            var offsetOfWindow = $(window).scrollTop() + $(window).height()*(2/3);

            if (offsetOfWindow > offsetOfObject) {

                $(this).animate({
                    'opacity': '1'
                }, 600);
            }
        });
    }

    //smooth scroll to top
    $backToTop.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, 600
        );
    });

});