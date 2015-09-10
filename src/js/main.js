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