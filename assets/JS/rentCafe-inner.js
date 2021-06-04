// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav">This is Where the specials should go</div>');


// change the navbar as you scroll

$(document).on('scroll', function () {
    var img = $("#logo-container img")
    if ($(window).scrollTop() >= 300){
        img.attr("src", img.attr("src").replace('https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://scibettas1.github.io/99bridge-staging/assets/images/logo.png'));
    } else {
        img.attr("src", img.attr("src").replace('https://scibettas1.github.io/99bridge-staging/assets/images/logo.png', 'https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85'));
    }
    console.log("this is running");
});
