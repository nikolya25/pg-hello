function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	console.log(navigator.accelerometer);
	console.log(navigator.contacts)
	navigator.notification.beep(1);
}

/*function deviceInfo() {

	infoD =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(infoD);
	
}

function authorInfo() {

	infoA =  'Hi, My author is' + '\n' +
			'=====' + '\n' +
			'Author Name	:	Mykola Shchur	\n'	+ 
			'Author Email	:	kolya_shchur@mail.ru	\n'	;
	navigator.notification.alert(infoA);
}*/

/*function checkConnection() {
	var network = navigator.onLine ? 'online' : 'offline';
	
	var networkState = navigator.connection.type;
	var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
	
    navigator.notification.alert(network	+	'\n'	+ 'Connection type	:	'	+	states[networkState]	+	'\n');
}*/

/*function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

function getAcceleration() {
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}*/

/*function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        alert("Formatted:	"	+	contacts[i].name.formatted	+ "\n" +
            "Name:	"	+	contacts[i].displayName	+ "\n" +
            "Phone Number:	"	+	contacts[i].phoneNumber	+ "\n\n";
    }
};
 
function onError(contactError) {
    alert('onError!');
};
 
function showContacts () {
	var options      = new ContactFindOptions();
	options.filter   = "";
	options.multiple = true;
	options.desiredFields = [navigator.contacts.fieldType.id];
	options.hasPhoneNumber = true;
	filter = ["displayName", "name"];
	navigator.contacts.find(filter, onSuccess, onError, options);
}*/

function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        for (var j = 0; j < contacts[i].addresses.length; j++) {
            alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                "Type: "           + contacts[i].addresses[j].type          + "\n" +
                "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                "Region: "         + contacts[i].addresses[j].region        + "\n" +
                "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                "Country: "        + contacts[i].addresses[j].country);
        }
    }
};
 
function onError(contactError) {
    alert('onError!');
};
 
// find all contacts 
var options = new ContactFindOptions();
options.filter = "";
options.multiple = true;
var filter = ["displayName", "addresses"];
navigator.contacts.find(filter, onSuccess, onError, options);

var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};
