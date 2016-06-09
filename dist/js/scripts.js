/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

$(document).ready(function($) {

    var $backToTop = $('.cd-top'),
        offset = 1000;


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
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());