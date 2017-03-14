function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
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
	navigator.notification.alert(infoA);*/
	
}