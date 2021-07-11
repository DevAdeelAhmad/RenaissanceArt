/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         HTMLMATE Team

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var vidco = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.menuBar();
				this.mobileMenu();
				this.bannerStyle();
				this.mainSlider();
				this.playerJS();
				this.videoPopup();
				this.achievmentSlide();
				this.counterUp();
				this.bannerParalax();
				this.workTab();
				this.testimonialSlide();
				this.sponsorSlide();
				this.googleMap();
			},




/* Start Of Preloader
================================================*/
preloader: function (){

	jQuery(window).on('load', function(){
		jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
	});
},
/* Start Of Preloader
================================================*/




/* - Start of menu bar
================================================*/
menuBar: function (){
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 50) {
			jQuery('.main-menu-container').addClass('menu-bg-overlay')
		} else {
			jQuery('.main-menu-container').removeClass('menu-bg-overlay')
		}
	})

},

mobileMenu: function (){
	jQuery('.mobile-menu nav').meanmenu();
},

/* - End of menu bar
================================================*/





/* - start of typer
================================================*/
bannerStyle: function() {
	var win = jQuery(window),
	foo = jQuery('#typer');
	foo.typer(['Explainer Videos','Exclusive Videos', 'Stunning Videos' ]);           
	win.resize(function(){
		var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
		
	}).resize();

},

mainSlider: function() {
	$('.slider-content').slick({
		fade: true,
	});
	$(function(){
		jQuery("#P1").YTPlayer();
	});
},

playerJS: function() {
	plyr.setup(
		'.promo-y', {
			autoplay: true,
		}
		);

},

/* - End of typer
================================================*/





/* Start of Video popup
================================================*/
videoPopup: function (){
	jQuery('.popup-with-zoom-anim').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
},

/* - End Of Video popup
================================================*/



/* - Start of Testimonial slide
================================================*/
achievmentSlide: function (){
	jQuery('.achivment-left-img').owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: !0,
		autoplay: true,
		animateIn: 'fadeInDown',
		animateOut: 'slideOutDown',
	})

},
/* - End Of Testimonial slide
================================================*/



/* Start Of counter-up
================================================*/
counterUp: function (){
	jQuery('.counter').counterUp({
		delay: 50,
		time: 2000,
	});

},
/* - End Of counter-up
================================================*/


/* Start of paralax
================================================*/

bannerParalax: function (){
	jQuery('.jarallax').jarallax({
		speed: 0.5,
	});
},

googleMap: function (){
	$(document).ready(function (){
        /*   - Google Map - with support of gmaps.js 
        --------------------------------------------------------------------*/ 

        function isMobile() { 
        	return ('ontouchstart' in document.documentElement);
        }

        function init_gmap() {
        	if ( typeof google == 'undefined' ) return;
        	var options = {
        		center: [40.712784,-74.005941],
        		zoom: 16,
        		mapTypeControl: true,
        		mapTypeControlOptions: {
        			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        		},
        		navigationControl: true,
        		scrollwheel: false,
        		streetViewControl: true,
        	}

        	if (isMobile()) {
        		options.draggable = false;
        	}

        	$('#googleMaps').gmap3({
        		map: {
        			options: options
        		},
        		marker: {
        			latLng: [40.712784,-74.005941],
        			
        		}
        	});
        }
        init_gmap();
        /*   - Google Map - with support of gmaps.js End 
        --------------------------------------------------------------------*/

    });
},

/* End of paralax
================================================*/




/* Start Of Isotope
================================================*/
workTab:  function (){
	jQuery(window).on('load', function(){
		$('.filtr-container').imageloader( function(){});
		var filterizd = $('.filtr-container');

		if(filterizd.length) {
			filterizd.filterizr({


   //options object
});
			$('.filtr-button').on('click', function() {

    //console.log("Clicked");
    $('.filtr-button.filtr-active').removeClass('filtr-active');
    $(this).addClass('filtr-active');
});
		}
	});
},
/* End Of Isotope
================================================*/


/* - Start of testimonial slider
================================================*/
testimonialSlide: function (){
	$('.testimonial-slide').owlCarousel({
		margin:25,
		pagination: true,
		autoplay: false,
		smartSpeed: 1000,
		items: 2,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true,
			},
			600:{
				items:1,
				nav:false,
				dots:true,
			},
			1000:{
				items:2,
				nav:false,
				loop:false,
				dots:true,
			}
		}
	})
},
/* - End of testimonial slider
================================================*/



/* - Start of sponsor slider
================================================*/

sponsorSlide: function (){
	$('.sponser-slide').owlCarousel({
		margin:40,
		responsiveClass:true,
		nav: true,
		autoplay: false,
		navText:["<i class='ion-chevron-left'></i>","<i class='ion-chevron-right'></i>"],
		smartSpeed: 1000,
		responsive:{
			0:{
				items:2,
			},
			400:{
				items:2,
			},
			600:{
				items:2,
			},
			700:{
				items:3,
			},
			1000:{
				items:6,

			}
		},
	})
},
/* - End of sponsor slider
================================================*/


}
}
jQuery(document).ready(function (){
	vidco.init();
});

})();