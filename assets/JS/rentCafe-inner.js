$('title').text(function (index, text) { return text.replace('99 Bridge | Custom Page', 'Features & Amenities of 99 Bridge'); });
$(document).ajaxComplete(function () {
  $('title').text(function (index, text) { return text.replace('99 Bridge | Custom Page', 'Features & Amenities of 99 Bridge'); });
});

// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav">This is Where the specials should go</div>');

// change the navbar as you scroll

$(document).on('scroll', function () {
    var img = $("#landing #logo-container img")
    if ($(this).scrollTop() >= $('#content').position().top) {
      img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png'));
    } else {
      img.attr("src", img.attr("src").replace('https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logobw.png?&quality=85'));
    }
    console.log("this is running");
  });

  const currentYear = new Date().getFullYear();

console.log(currentYear)

$('#text').text(function (index, text) { return text.replace('" ©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved.&nbsp;|&nbsp;Website Design by RENT"<i>Café</i>', '©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by Sam Scibetta'); });
$(document).ajaxComplete(function () {
    $('#text').text(function (index, text) { return text.replace('" ©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved.&nbsp;|&nbsp;Website Design by RENT"<i>Café</i>', '©' + currentYear + 'BNE Real Estate Group.  All Rights Reserved. | Website Design by Sam Scibetta'); });
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