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

function onSuccess(contacts) {
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
}