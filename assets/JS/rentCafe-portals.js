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
