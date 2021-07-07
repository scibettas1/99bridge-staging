// replace resident login with contact
$('#login-links').append('<li id="contact-btn"><a href="contactus.aspx">CONTACT</a></li>');

// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu #HomeMenu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav">This is Where the specials should go</div>');

// tagline

$('#landing').append('<div id="tagline" class="tagline">Your Life. Your Way.<div class="sub-tag">New 1 & 2 Bedroom<br/>Luxury Rentals Now Leasing</div></div><div id="caret"><p class="arrow">&#94;</p></div>');

// change the navbar as you scroll

$(document).on('scroll', function () {
  var img = $("#landing #logo-container img")
  // if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1850) {
    if ($(this).scrollTop() >= $('#about').position().top - 100 && $(this).scrollTop() <= $('#gallery').position().top - 100) {
    img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png'));
    console.log("first switch");
  } else 
  if ($(this).scrollTop() >= $('#gallery-image').position().top - 100 && $(this).scrollTop() <= $('#amenities').position().top - 100) {
    img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png'));
    console.log("second switch");
  } else {
    img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85'));
  }
});


// replace 99 bridge with and address of sophistication

$('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('99 Bridge', 'AN ADDRESS OF SOPHISTICATION'); });
$(document).ajaxComplete(function () {
  $('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('99 Bridge', 'AN ADDRESS OF SOPHISTICATION'); });
});

// add availability button

$('#gallery-caption').append('<br /><div class="floorplans"><a href="floorplans.aspx" class="btn btn btn-primary" id="gallerybtn">Availability</a></div');

// add text over gallery image

$('#gallery #gallery-image .overlay').prepend('<div class="amenities"><h1>AMENITIES THAT AMAZE</h1><div class="normaltext">Customize your ideal lifestyle through an exciting array of community amenities, deicated to delivering the perfect live/work/play balance. Abundant indoor and outdoor spaces include social and co-working lounges, state-of-the-art fitness facilities, a kids playroom, pet spa, a sun terrace with an outdoor bar, BBQs, fire pit, a swimming pool, and so much more. With so many carefully considered amenities, getting away from it all is just as easy as steppingoutside your door.<br /><br /><br /><a class="btn btn btn-primary" href="photogallery.aspx"><span style="font-size: 21px">View Gallery</span></a></div></div></div>');

$('#gallery #gallery-image .overlay').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

//add caption to location section

// $('#com-amenities-title').append('<div class="neighborhood-sub-title">HIGHER EDUCATION AND<br />THE GREAT OUTDOORS</div>');

//add map to the bottom of the page

$('#amenities').append('<div id="map"><iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCGr0yjNEz31lMcJkV0_sF2rJ2WR57GXdI&q=place_id:ChIJpeRtzuPNw4kRjBdUV1UsENM" allowfullscreen></iframe></div>');


$('#footer-image').prepend('<div id="new-address">(732) 970-8444 &nbsp|&nbsp <a href="mailto:info@rent99bridge.com">info@Rent99Bridge.com</a><br /><a href="https://www.google.com/maps/place/99+Old+Amboy+Rd,+Old+Bridge,+NJ+08857/@40.37934,-74.310975,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3cde3ce6de4a5:0xd3102c555754178c!8m2!3d40.37934!4d-74.3087863" target="_blank">99 Old Amboy Road, Old Bridge, NJ 08857</a></div>');


function initMap() {
  const myLatLng = { lat: 40.37934, lng: -74.310975 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    mapId: "f800eff10e0348a",
  });
  const image = "https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logo-map-outer-glow.png";
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: image,
  });
}

initMap()


$('#eho-copyright').append('<div class="">Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a></div>');


