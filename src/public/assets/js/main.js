(function ($) {
	"use strict";

		var flagscroll = true;	
		var flagscroll2 = true;
		
		$('ul.sf-menu').superfish({  
			delay:       100,
			animation:   {opacity:'show',height:'show'},  
			speed:       'fast',                          
			autoArrows:  true                            
		});

		$(window).scroll(function(){
			var y = $(window).scrollTop();
			var x = $(window).scrollTop();
			if(  y > 1000 && flagscroll==true ) {
				flagscroll=false;
				$('.map-counter').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now).toLocaleString('en'));
						}
					});
				});
			} 

			if(  x > 2000 && flagscroll2==true ) {
				flagscroll2=false;
				$('.footer-counter').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now).toLocaleString('en'));
						}
					});
				});
			} 	
		});

		$('.hero-counter').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now).toLocaleString('en'));
				}
			});
		});

		$('.testimony').owlCarousel({
			center: false,
			loop: true,
			nav:true,
			margin: 10,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});

		$('.brand-carousel').owlCarousel({
			center: false,
			loop: true,
			nav:true,
			margin: 0,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});

		$('.portfolio-carousel').owlCarousel({
			center: true,
			items:4,
			autoplay:true,
			loop: true,
			nav:false,
			margin: 30,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				1000:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});

		//random city map generator
		var kenzap_map_loop = true;
		var kenzap_map = $(".kenzap-map");
		function map_cities(i){
		
			if(kenzap_map && typeof country_list !== "undefined"){

				if(i<Object.keys(country_list).length){

					var city = 	'<div data-index="'+i+'" class="kenzap-map-point" style="top: '+country_list["row"+i]["y"]+'%; left: '+country_list["row"+i]["x"]+'%; animation-delay: 0ms;">\
										<span class="kenzap-map-title" style="animation-delay: 0ms;">\
											<span> '+country_list["row"+i]["name"]+'</span>\
										</span>\
										<div class="kenzap-map-round" style="animation-delay: 0ms;"></div>\
									</div>';

					$(".kenzap-map-cont").append(city);
					setTimeout(function(){ 
						i++;
						map_cities(i);
					}, getRandomInt(50, 1000));
				}else{
					if(kenzap_map_loop){
						$(".kenzap-map-point").remove();
						setTimeout(function(){ 
							map_cities(0);
						}, 3000);
					}
				}
			}
		}
		map_cities(0);

		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		//generate new points by double clicking on map | uncomment console.log to see coordinates
		var xPercent = '', yPercent = '';
		$(".kenzap-map-cont").dblclick(function() {
			//console.log( xPercent+" | "+yPercent );
		});

		$(".kenzap-map-cont").mousemove(function(getCurrentPos){

			var xCord = getCurrentPos.clientX-$('.kenzap-map-cont').offset().left;
			var yCord = (getCurrentPos.clientY-$('.kenzap-map-cont').offset().top)+ $(window).scrollTop();
			xPercent = Math.round(xCord/$(".kenzap-map-cont").width()*10000)/100;
			yPercent = Math.round(yCord/$(".kenzap-map-cont").height()*10000)/100;
		});

})(jQuery);