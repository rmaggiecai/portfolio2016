function hasScrolled(){var l=$(this).scrollTop();return 0==l?void $("nav").removeClass("nav-down").removeClass("nav-up"):void(Math.abs(lastScrollTop-l)<=delta||(l>200&&(l>lastScrollTop&&l>navbarHeight?$("nav").addClass("nav-up").removeClass("nav-down"):l+$(window).height()<$(document).height()&&$("nav").addClass("nav-down").removeClass("nav-up")),lastScrollTop=l))}var didScroll,lastScrollTop=0,delta=100,navbarHeight=$("nav").outerHeight();$(window).scroll(function(l){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250);