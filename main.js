const gpio = require('onoff').Gpio
const fs = require('fs');
const CARDFILE = '~/test3.txt';

function beer(){
	var pin = gpio(17, 'out');
	pin.write(1, function(err){
		setTimeout( function(){ pin.write(0) }, 3333);
	})
}

fs.watch(CARDFILE, function(cur, prev){
	fs.stat(CARDFILE, function(err, stats){
		var size = stats.size;
		var readable = fs.createReadStream( CARDFILE, {start:size - 10, encoding:'utf8'} );
		readable.on('data', (chunk) => {
           		 console.log(chunk)
        	});
    });
});
