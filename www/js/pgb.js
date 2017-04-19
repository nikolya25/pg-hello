function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {

var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div , {'mapType': plugin.google.maps.MapTypeId.ROADMAP,
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
    target : [
      {lat:41.79883, lng:140.75675},
      {lat:41.799240000000005, lng:140.75875000000002},
      {lat:41.797650000000004, lng:140.75905},
      {lat:41.79637, lng:140.76018000000002},
      {lat:41.79567, lng:140.75845},
      {lat:41.794470000000004, lng:140.75714000000002},
      {lat:41.795010000000005, lng:140.75611},
      {lat:41.79477000000001, lng:140.75484},
      {lat:41.79576, lng:140.75475},
      {lat:41.796150000000004, lng:140.75364000000002},
      {lat:41.79744, lng:140.75454000000002},
      {lat:41.79909000000001, lng:140.75465},
      {lat:41.79883, lng:140.75673}
    ],
  }
});
}

var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div);
map.one(plugin.google.maps.event.MAP_READY, function() {
  var onSuccess = function(location) {
    var msg = ["Current your location:\n",
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

  var button = div.getElementById("button");
  button.addEventListener("click", function() {
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

