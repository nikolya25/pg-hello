function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	document.addEventListener("deviceready", function() {
  // Check the availability of Google Maps Android API v2.
  // Return always true in iOS.
  plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
    if (isAvailable) {
      var map = plugin.google.maps.Map.getMap();
      map.addEventListener(plugin.google.maps.event.MAP_READY, onMapInit);
    } else {
      alert(message);
    }
  });
});

function onMapInit(map) {
  alert("The google map is available on this device.");
}
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

/*function onSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
*/
/*
var Latitude = undefined;
var Longitude = undefined;
 
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

getMapLocation();
*/
var map;
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
 
  // Move to the position with animation 
  map.animateCamera({
    target: {lat: 37.422359, lng: -122.084344},
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {
 
    // Add a maker 
    map.addMarker({
      position: {lat: 37.422359, lng: -122.084344},
      title: "Welecome to \n" +
             "Cordova GoogleMaps plugin for iOS and Android",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {
 
      // Show the info window 
      marker.showInfoWindow();
 
      // Catch the click event 
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {
 
        // To do something... 
        alert("Hello world!");
 
      });
    });
  });
}
