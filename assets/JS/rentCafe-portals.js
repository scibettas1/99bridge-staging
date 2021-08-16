// added divs to the navbar

$('#landing').prepend('<div id="custom-nav"><p class="marquee">UP TO 2 MONTHS FREE!*</p></div>');

// change the navbar as you scroll

$(document).on('scroll', function () {
  var img = $("#landing #logo-container img")
  if ($(this).scrollTop() >= $('#content').position().top - 75) {
    img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/3/1372760/logobw.png?&quality=85', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png'));
  } else {
    img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/3/1372760/logobw.png?&quality=85'));
  }
  console.log("this is running");
});

const currentYear = new Date().getFullYear();
console.log(currentYear)

$('#footer-image').prepend('<div id="new-address">(732) 970-8444 &nbsp|&nbsp <a href="mailto:info@rent99bridge.com">info@Rent99Bridge.com</a><br /><a href="https://www.google.com/maps/place/99+Old+Amboy+Rd,+Old+Bridge,+NJ+08857/@40.37934,-74.310975,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3cde3ce6de4a5:0xd3102c555754178c!8m2!3d40.37934!4d-74.3087863" target="_blank">99 Old Amboy Road, Old Bridge, NJ 08857</a></div>');

$('#footer-image').append('<div id="new-copyright"><br /> © ' + currentYear + ' BNE Real Estate Group.  All Rights Reserved.<br />Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a><div>');

