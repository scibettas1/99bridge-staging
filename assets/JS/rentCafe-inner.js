// replace resident login with contact
$('#login-links').append('<li id="contact-btn"><a href="contactus.aspx">CONTACT</a></li>');

// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu #HomeMenu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav"><p class="marquee">UP TO 2 MONTHS FREE!</p></div>');

$('#info_panel').append('<section><ul class="socialmedia-icons"><li class="social-media-Facebook "><a data-selenium-id="SM_FaceBookIcon" class="facebook-icon" target="_blank" aria-label="Facebook" href="https://www.facebook.com/99BridgeLuxuryRentals/"></a></li><li class="social-media-Instagram "><a data-selenium-id="SM_InstagramIcon" class="instagram-icon" target="_blank" aria-label="Instagram" href="https://www.instagram.com/bne_realestate/"></a></li></section>');

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

  $('#footer-image').prepend('<div id="new-address">(732) 970-8444 &nbsp|&nbsp <a href="mailto:info@rent99bridge.com">info@Rent99Bridge.com</a><br /><a href="https://www.google.com/maps/place/99+Old+Amboy+Rd,+Old+Bridge,+NJ+08857/@40.37934,-74.310975,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3cde3ce6de4a5:0xd3102c555754178c!8m2!3d40.37934!4d-74.3087863" target="_blank">99 Old Amboy Road, Old Bridge, NJ 08857</a></div>');

$('#eho-copyright').append('<div class="">Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a></div>');