/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

$(document).ready(function($) {

    var $backToTop = $('.cd-top'),
        offset = ( $('.project-grid').offset().top ) + 100;

    $(window).on('scroll', function() {
        backToTop();
    });

    function backToTop() {
        if ( $(this).scrollTop() > offset ) {
            $backToTop.removeClass('is-invisible');

        } else {
            $backToTop.addClass('is-invisible');
        }
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