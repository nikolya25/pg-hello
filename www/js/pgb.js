function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

var map;
var Latitude = undefined;
var Longitude = undefined;

document.addEventListener("deviceready", function() {
	var div = document.getElementById("map");
 
	// Initialize the map view 
	map = plugin.google.maps.Map.getMap(div);
 
	// Wait until the map is ready status. 
	map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);
 
function onMapReady() {
	var button = document.getElementById("button");
	button.addEventListener("click", onBtnClicked);
}
 
function onBtnClicked() {
	getMapLocation();
}

// Get geo coordinates 

function getMapLocation() {
 
    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}
 
// Success callback for get geo coordinates 
 
function onMapSuccess(position) {
 
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
 
    getMap(Latitude, Longitude);
 
}

// Error callback for get geo coordinates

function onMapError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
   } 

// Get map by using coordinates 
 
function getMap(latitude, longitude) {
 
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);
 
 
    var latLong = new google.maps.LatLng(latitude, longitude);
 
    var marker = new google.maps.Marker({
        position: latLong
    });
 
    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

