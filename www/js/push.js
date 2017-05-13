function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	alert('Device is ready!');
	var data = {
	"title": "Hello",
    "message": "World",
    };
	setupPush();
}

function setupPush() {
	var push = PushNotification.init({
		"android": {
			"senderID": "781429210866"
		},
		"ios": {
			"sound": true,
			"alert": true,
			"badge": true
		},
		"windows": {}
	});

   push.on('registration', function(data) {
		console.log("registration event: " + data.registrationId);
		alert("registration event: " + data.registrationId);
		document.getElementById("test").innerHTML = "registration event: " + data.registrationId;
		var oldRegId = localStorage.getItem('registrationId');
		if (oldRegId !== data.registrationId) {
			// Save new registration ID
			localStorage.setItem('registrationId', data.registrationId);
			// Post registrationId to your app server as the value has changed
		}
	});
	
   push.on('error', function(e) {
       console.log("push error = " + e.message);
	   alert("push error = " + e.message);
   });
   
   	push.on('notification', function(data) {
		console.log('notification event');
        navigator.notification.alert(
            "World", 	       // message
            null,              // callback
            "Hello",           // title
            'Ok'               // buttonName
        );
    });
 }