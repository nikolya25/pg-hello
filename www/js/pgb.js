function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	map.getMyLocation(onSuccess, onError);
}

function onDeviceReady() {
	var div = document.getElementById("map");
	var map = plugin.google.maps.Map.getMap(div , {
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
				lat: location.latLng.lat, lng: location.latLng.lat
			},
		}
	});
}

map.one(plugin.google.maps.event.MAP_READY, function() {
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
		'title': msg
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