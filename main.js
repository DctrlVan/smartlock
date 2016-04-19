const gpio = require('onoff').Gpio
var pin = gpio(17, 'out');
pin.write(1, function(err){
	setTimeout( function(){ pin.write(0) }, 3333);
})

