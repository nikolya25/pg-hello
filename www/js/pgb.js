function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {

var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div , {'mapType': plugin.google.maps.MapTypeId.ROADMAP,
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
		lat:0, lng:0
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

    map.clear();
    map.getMyLocation(onSuccess, onError);
  });
});


/*// Get geo coordinates 

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

