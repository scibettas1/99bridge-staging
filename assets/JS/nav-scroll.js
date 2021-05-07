$(document).ready(() => {

    $(document).on('scroll', function(){
        if ( $(window).scrollTop() > 799) {
            $('#nav').addClass('change-color');
            $('#logobw').addClass('logo-hidden');
            $('#logo').removeClass('logo-hidden');
            $('#menu1').addClass('menu-hidden');
            $('#menu2').removeClass('menu-hidden');
        } else {
            $('#nav').removeClass('change-color');
            $('#logobw').removeClass('logo-hidden');
            $('#logo').addClass('logo-hidden');
            $('#menu1').removeClass('menu-hidden');
            $('#menu2').addClass('menu-hidden');
        }
    });
    
    console.log("this is running");


});