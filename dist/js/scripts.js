/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

$(document).ready(function($) {

    $('.diamond-img').mouseenter( function() {
        //$(this).children('img').fadeTo( 'fast', 0.2 );
        //$(this).find('h2').fadeTo( 'fast', 1 );
        //$(this).find('p').fadeTo( 'fast', 1 );
    });

    $('.diamond-img').mouseleave( function() {
        //$(this).children('img').fadeTo( 'fast', 1 );
        //$(this).find('h2').fadeTo( 'fast', 0 );
        //$(this).find('p').fadeTo( 'fast', 0 );
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