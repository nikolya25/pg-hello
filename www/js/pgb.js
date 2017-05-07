function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	var div = document.getElementById("map");
	var map = plugin.google.maps.Map.getMap(div, {
		'mapType': plugin.google.maps.MapTypeId.ROADMAP,
		'controls': {
			'compass': true,
			//'myLocationButton': true,
			'indoorPicker': true,
			'zoom': true
		},
		'gestures': {
			'scroll': true,
			'tilt': true,
			'rotate': true,
			'zoom': true
		},
		camera: {
			target: {
				lat: 50.0593677, lng: 19.9375843
			},
			zoom: 12
		}
	});
}
	map.addMarker({
  position: {"lat": 10, "lng": 10},
  icon: 'green',
  'title': "Hello World!\nThis plugin is not very awesome!",
  'snippet': "Tap here!"
}, function( marker ) {
  marker.showInfoWindow();
});

map.one(plugin.google.maps.event.MAP_READY, function() {
	map.addMarker({
  position: {"lat": 0, "lng": 0},
  icon: 'blue',
  'title': "Hello World!\nThis plugin is very awesome!",
  'snippet': "Tap here!"
}, function( marker ) {
  marker.showInfoWindow();
});
	
	var data = [
		{
			'target': {lat: 50.057678, lng: 19.926189},
			'title': "Kraków, Aleja Krasińskiego",
			'snippet': "Kraków, Aleja Krasińskiego" 
		},
		{
			'target': {lat: 50.057447, lng: 19.946008},
			'title': "Kraków, ul. Dietla",
			'snippet': "Kraków, ul. Dietla"
		},
		{
			'target': {lat: 50.010575, lng: 19.949189},
			'title': "Kraków, ul. Bujaka",
			'snippet': "Kraków, ul. Bujaka"
		},
		{
			'target': {lat: 50.081197, lng: 19.895358},
			'title': "Kraków, ul. Złoty Róg",
			'snippet': "Kraków, ul. Złoty Róg"
		},
		{
			'target': {lat: 50.069308, lng: 20.053492},
			'title': "Kraków, ul. Bulwarowa",
			'snippet': "Kraków, ul. Bulwarowa"
		},
		{
			'target': {lat: 50.099361, lng: 20.018317},
			'title': "Kraków, os. Piastów",
			'snippet': "Kraków, os. Piastów"
		},
		{
			'target': {lat: 50.0192 , lng: 20.016803},
			'title': "Kraków, ul. Telimeny",
			'snippet': "Kraków, ul. Telimeny"
		},
		{
			'target': {lat: 50.100569, lng: 20.122561},
			'title': "Kraków, os. Wadów",
			'snippet': "Kraków, os. Wadów"
		}
	];
	
	addMarkers(data, function(markers) {
		markers[markers.length - 1].showInfoWindow();
	});

	function addMarkers(data, callback) {
		var markers = [];
		function onMarkerAdded(marker) {
			markers.push(marker);
			if (markers.length === data.length) {
				callback(markers);
			}
		}
		data.forEach(function(markerOptions) {
			map.addMarker(markerOptions, onMarkerAdded);
		});
	}

	/*map.one(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, function() {
		function onSuccess(location) {
			var msg = ["Current location:\n",
			"latitude:" + location.latLng.lat,
			"longitude:" + location.latLng.lng,
			"speed:" + location.speed,
			"time:" + location.time,
			"bearing:" + location.bearing].join("\n");
		
			map.addMarker({
				'target': location.latLng,
				'title': msg,
				'animation': plugin.google.maps.Animation.BOUNCE
			}, function(marker) {
				marker.showInfoWindow();
				map.animateCamera({
					target: location.latLng,
					zoom: 16
				}, function() {
					marker.showInfoWindow();
				});
			});
		};

		var onError = function(msg) {
			alert(JSON.stringify(msg));
		};

		map.clear();
		map.getMyLocation(onSuccess, onError);
	});*/	
});

function showMap() {
	document.getElementById('mapshowbutton').style.display = "none";
	document.getElementById('map').style.display = "block";
}