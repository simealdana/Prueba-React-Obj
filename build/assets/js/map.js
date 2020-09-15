(function ($) {
 "use strict";

	var cityIconUrl ='https://image.ibb.co/nAw4Nw/marker.png';
	var cityIcon = {
		 url: cityIconUrl,
		 size: new google.maps.Size(39,39),
		 origin: new google.maps.Point(0,0),
		 anchor: new google.maps.Point(0,39)
    };
	var cities = [{
			lat: 39.91013796,
			lon: -106.3497231,
			title: 'United States',
			html: '<strong>United States</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
		},{
			lat: 48.9228434,
			lon: -96.5059731,
			title: 'Canada',
			html: '<strong>Canada</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
		},{
			lat: -16.29854833,
			lon: -58.5372231,
			title: 'Brazil',
			html: '<strong>Brazil</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
		},{
			lat: 25.48342395,
			lon: -4.7481606,
			title: 'Morokko',
			html: '<strong>Morokko</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
		},{
			lat: 39.63994087,
			lon: 3.3377769,
			title: 'France',
			html: '<strong>France</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 37.98710804,
			lon: 21.0995725,
			title: 'Romania',
			html: '<strong>Romania</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 44.64485044,
			lon: 32.3495725,
			title: 'Ukraine',
			html: '<strong>Ukraine</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 58.52034203,
			lon: 62.2266749,
			title: 'Moscow',
			html: '<strong>Moscow</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 32.66382479,
			lon: 39.63878428,
			title: 'Syria',
			html: '<strong>Syria</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 7.84161519,
			lon: 106.56738281,
			title: 'Vietnam',
			html: '<strong>Vietnam</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 31.59725256,
			lon: 139.10888672,
			title: 'Japan',
			html: '<strong>Japan</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: 31.74685416,
			lon: 128.21044922,
			title: 'South Korea',
			html: '<strong>South Korea</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: -8.79822546,
			lon: 106.83105469,
			title: 'Jakarta',
			html: '<strong>Jakarta</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: -8.79822546,
			lon: 106.83105469,
			title: 'Jakarta',
			html: '<strong>Jakarta</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: -28.45903302,
			lon: 130.69335938,
			title: 'Australia',
			html: '<strong>Australia</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		},{
			lat: -34.7416125,
			lon: 146.16210938,
			title: 'Wales',
			html: '<strong>Wales</strong>',
			icon: cityIconUrl,
			animation: google.maps.Animation.DROP,
			zoom:2,
		}];
	 
	new Maplace({
		map_div: '#map-1',
		show_markers: true,
		generate_controls: false,
		locations: cities,
		map_options: {
			set_center: [20, 10],
			zoom:2,
			disableDefaultUI: true,
			draggable: false,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			backgroundColor: '#ffffff',
			styles: [
            {elementType: 'geometry', stylers: [{color: '#eaedef'}]},
            {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
            {elementType: 'labels.text.fill', stylers: [{visibility: 'off'}]},
            {
				featureType: "administrative",
				elementType: "geometry",
				stylers: [
				  { visibility: "off" }
				]
			},
			{
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{visibility: 'off'}]
            }
          ]
		}
	}).Load();
	
	 new Maplace({
		map_div: '#map-2',
		show_markers: true,
		generate_controls: false,
		locations: cities,
		map_options: {
			set_center: [20, 10],
			zoom:1,
			disableDefaultUI: true,
			draggable: false,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			backgroundColor: '#ffffff',
			styles: [
            {elementType: 'geometry', stylers: [{color: '#eaedef'}]},
            {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
            {elementType: 'labels.text.fill', stylers: [{visibility: 'off'}]},
            {
				featureType: "administrative",
				elementType: "geometry",
				stylers: [
				  { visibility: "off" }
				]
			},
			{
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{visibility: 'off'}]
            }
          ]
		}
		
	}).Load();

})(jQuery);