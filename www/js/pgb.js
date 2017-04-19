function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {

}

var map;
var Latitude = undefined;
var Longitude = undefined;

var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div);
map.one(plugin.google.maps.event.MAP_READY, function() {

  var onSuccess = function(location) {
    var msg = ["Current location: \n",
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

  var button = div.getElementsByTagName('button')[0];
  button.addEventListener('click', function() {
    map.clear();
    map.getMyLocation(onSuccess, onError);
  });

});
/* 
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
}*/

