function owlslider() {
    jQuery('#owl-slider').owlCarousel({
        items: 1,
		lazyLoad: true,
        loop: true,
        autoplay: true,
        nav: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
    });
}
function owlLinks() {
    jQuery('#owl-links').owlCarousel({
        items: 8,
		lazyLoad: true,
        loop: true,
        autoplay: true,
        nav: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
    });
}


function top_news(){
    jQuery('#owl-topnews').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            830: {
                items: 3,
            },
            1200: {
                items: 4
            }
              , 1367: {
                  items: 5,
              }
        }
    });
}
      jQuery(document).ready(function($) {
       owlslider();
	
	  top_news();
      owlLinks();
	
	});
	