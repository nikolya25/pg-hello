function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	document.getElementById('mapshowbutton').style.display = "none";
var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div, {
	'mapType': plugin.google.maps.MapTypeId.ROADMAP,
	'controls': {
		'compass': true,
		'myLocationButton': true,
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
		target : {
			lat: 50.0593677, lng: 19.9375843
		},
		zoom : 14
	}
});
}
map.one(plugin.google.maps.event.MAP_READY, function() {	
	/*var stations = [
	{
		position: {lng: 50,057678, lat: 19,926189},
		title: "Kraków, Aleja Krasińskiego",
		snippet: "Kraków, Aleja Krasińskiego" 
	},
	{
		position: {lng: 50,057447, lat: 19,946008},
		title: "Kraków, ul. Dietla",
		snippet: "Kraków, ul. Dietla"
	},
	{
		position: {lng: 50,010575, lat: 19,949189},
		title: "Kraków, ul. Bujaka",
		snippet: "Kraków, ul. Bujaka"
	},
	{
		position: {lng: 50,081197, lat: 19,895358},
		title: "Kraków, ul. Złoty Róg",
		snippet: "Kraków, ul. Złoty Róg"
	},
	{
		position: {lng: 50,069308, lat: 20,053492},
		title: "Kraków, ul. Bulwarowa",
		snippet: "Kraków, ul. Bulwarowa"
	},
	{
		position: {lng: 50,099361, lat: 20,018317},
		title: "Kraków, os. Piastów",
		snippet: "Kraków, os. Piastów"
	},
	{
		position: {lng: 50,0192 , lat: 20,016803},
		title: "Kraków, ul. Telimeny",
		snippet: "Kraków, ul. Telimeny"
	},
	{
		position: {lng: 50,100569, lat: 20,122561},
		title: "Kraków, os. Wadów",
		snippet: "Kraków, os. Wadów"
	}
	];

	map.addMarkers(map, stations, function(markers) {
		var bounds = [];
		stations.forEach(function(POI) {
			bounds.push(POI.position);
		});
		map.moveCamera({
			target: bounds
		}, function() {
			markers[markers.length - 1].showInfoWindow();
		});
	});

	function addMarkers(map, stations, callback) {
		var markers = [];
		function onMarkerAdded(marker) {
			markers.push(marker);
			if (markers.length === stations.length) {
				callback(markers);
			}
		}
		stations.forEach(function(markerOptions) {
			map.addMarker(markerOptions, onMarkerAdded);
		});
	}*/
});

/*map.one(plugin.google.maps.event.MAP_READY, function() {
	map.on(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, function() {
		function onSuccess(location) {
			var msg = ["Current location:\n",
			"latitude:" + location.latLng.lat,
			"longitude:" + location.latLng.lng,
			"speed:" + location.speed,
			"time:" + location.time,
			"bearing:" + location.bearing].join("\n");
		
			map.addMarker({
				'position': location.latLng,
				title: msg
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
	});
});

function showMap() {
	document.getElementById('mapshowbutton').style.display = "none";
	document.getElementById('map').style.display = "block";
}