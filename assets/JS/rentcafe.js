// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav">This is Where the specials should go</div>');

// tagline

$('#landing').append('<div id="tagline" class="tagline">Your Life. Your Way.</div>');

// change the navbar as you scroll

$(document).on('scroll', function () {
    var img = $("#logo-container img")
    if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1850 ){
        img.attr("src", img.attr("src").replace('https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://scibettas1.github.io/99bridge-staging/assets/images/logo.png'));
    } else {
        img.attr("src", img.attr("src").replace('https://scibettas1.github.io/99bridge-staging/assets/images/logo.png', 'https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85'));
    }
    console.log("this is running");
});


// replace 99 bridge with and address of sophistication

$('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('99 Bridge', 'AN ADDRESS OF SOPHISTICATION'); });
$(document).ajaxComplete(function () {
    $('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('99 Bridge', 'AN ADDRESS OF SOPHISTICATION'); });
}
);

// add gellery button

$('#gallery-caption').append('<br /><a href="photogallery.aspx" class="btn btn btn-primary" id="gallerybtn" aria-label="View Photo Gallery">View Gallery</a>');

$('#gallery #gallery-image .overlay').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

//add map to the bottom of the page

$('#amenities').append('<div id="map"><iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCGr0yjNEz31lMcJkV0_sF2rJ2WR57GXdI&q=place_id:ChIJpeRtzuPNw4kRjBdUV1UsENM" allowfullscreen></iframe></div>');


function initMap() {
    const myLatLng = { lat: 40.37934, lng: -74.310975  };
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