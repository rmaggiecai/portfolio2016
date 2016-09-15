// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 100;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (st == 0){
      $('nav').removeClass('nav-down').removeClass('nav-up');
      return;
    }
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > 200){
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('nav').addClass('nav-up').removeClass('nav-down');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('nav').addClass('nav-down').removeClass('nav-up');
          }
      }
    }

    lastScrollTop = st;
}
