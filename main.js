const gpio = require('onoff').Gpio
var pin = gpio(17, 'out');
pin.write(1, err=>{
	setTimeout( ()=>{ pin.write(0) }, 3333);
})

