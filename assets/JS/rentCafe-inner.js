// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav">This is Where the specials should go</div>');

// change the navbar as you scroll

$(document).on('scroll', function () {
    var img = $("#logo-container img")
    if ($(window).scrollTop() >= 250) {
        img.attr("src", img.attr("src").replace('https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://scibettas1.github.io/99bridge-staging/assets/images/logo.png'));
    } else {
        img.attr("src", img.attr("src").replace('https://scibettas1.github.io/99bridge-staging/assets/images/logo.png', 'https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85'));
    }
    console.log("this is running");
});

const currentYear = new Date().getFullYear();

console.log(currentYear)

$('#text').text(function (index, text) { return text.replace('©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by RENT<i>Café</i>', '©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by Sam Scibetta'); });
$(document).ajaxComplete(function () {
    $('#text').text(function (index, text) { return text.replace('©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by RENT<i>Café</i>', '©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by Sam Scibetta'); });
}
);

$('#eho-copyright').append('<div class="">Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a></div>');


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