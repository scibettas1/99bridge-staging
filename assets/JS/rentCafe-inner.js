// replace resident login with contact
$('#login-links').append('<li id="contact-btn"><a href="contactus.aspx">CONTACT</a></li>');

// added divs to the slide in menu

$('#menu').prepend('<div class="ninety9"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/99graphic.png"></div>');

$('#menu #HomeMenu').prepend('<div class="menu-logo"><img src="https://scibettas1.github.io/99bridge-staging/assets/images/logobw.png"></div>');

// added divs to the navbar

$('#landing').prepend('<div id="custom-nav"><p class="marquee">UP TO 2 MONTHS FREE!*</p></div>');

$('#info_panel').append('<section><ul class="socialmedia-icons"><li class="social-media-Facebook "><a data-selenium-id="SM_FaceBookIcon" class="facebook-icon" target="_blank" aria-label="Facebook" href="https://www.facebook.com/99BridgeLuxuryRentals/"></a></li><li class="social-media-Instagram "><a data-selenium-id="SM_InstagramIcon" class="instagram-icon" target="_blank" aria-label="Instagram" href="https://www.instagram.com/bne_realestate/"></a></li></section>');

$('#mainformcontainer h1').text(function (index, text) { return text.replace('Floor Plans', 'Availability'); });
$(document).ajaxComplete(function () {
  $('#mainformcontainer h1').text(function (index, text) { return text.replace('Floor Plans', 'Availability'); });
  console.log("yay it works!");
});


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

  const currentYear = new Date().getFullYear();
  console.log(currentYear)
  
  $('#eho-copyright').append('<div class="">Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a></div>');
  
  $('#social-media').append('<div class="incentive">* Incentives are based on a 26 month lease term and may be valid on select homes. Additional incentives may be available. Prices and promotions are subject to change at any time. Please contact the leasing office for full details.</div>');
  
  $('#social-media').append('<div id="eho-copyright-new"> © ' + currentYear + ' Yardi Systems, Inc. All Rights Reserved.<br/>Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a></div>');
  
  
//   $('#filter-item-moveindate').text(function (index, text) { return text.replace('<div class="fp-inner filter-item-container col-md-3" id="filter-item-moveindate"><i class="iconm-calendar3"></i> Move in date  <div><select id="filter_availableDate" class="show-tick" data-filter="availableDate" data-selenium-id="MoveInDateSelector"><option value="all">Any Timeframe</option><option value="0">Immediately</option><option value="30">Within a Month</option><option value="60">Within two Months</option><option value="90">Within three Months</option></select></div></div>', '<div class="btn-group bootstrap-select show-tick"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="filter_availableDate" tabindex="0" title="Any Timeframe"><span class="filter-option pull-left">Any Timeframe</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Any Timeframe</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Immediately</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within a Month</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within two Months</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within three Months</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="filter_availableDate" class="show-tick" data-filter="availableDate" data-selenium-id="MoveInDateSelector" tabindex="-98"><option value="all">Any Timeframe</option><option value="0">Immediately</option><option value="30">Within a Month</option><option value="60">Within two Months</option><option value="90">Within three Months</option></select></div>'); });
// $(document).ajaxComplete(function () {
//   $('#filter-item-moveindate').text(function (index, text) { return text.replace('<div class="fp-inner filter-item-container col-md-3" id="filter-item-moveindate"><i class="iconm-calendar3"></i> Move in date  <div><select id="filter_availableDate" class="show-tick" data-filter="availableDate" data-selenium-id="MoveInDateSelector"><option value="all">Any Timeframe</option><option value="0">Immediately</option><option value="30">Within a Month</option><option value="60">Within two Months</option><option value="90">Within three Months</option></select></div></div>', '<div class="btn-group bootstrap-select show-tick"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="filter_availableDate" tabindex="0" title="Any Timeframe"><span class="filter-option pull-left">Any Timeframe</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Any Timeframe</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Immediately</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within a Month</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within two Months</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Within three Months</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="filter_availableDate" class="show-tick" data-filter="availableDate" data-selenium-id="MoveInDateSelector" tabindex="-98"><option value="all">Any Timeframe</option><option value="0">Immediately</option><option value="30">Within a Month</option><option value="60">Within two Months</option><option value="90">Within three Months</option></select></div>'); });
// });