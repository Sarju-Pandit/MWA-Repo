
const fs = require('fs');

process.on('message', (file) => {
    const readable = fs.createReadStream(__dirname+'/files/' + file.url);

	var chunks = []; 
	readable.on('data', function(chunk) {
	    chunks.push(chunk);
	});

	readable.on('end', function() {
	    process.send(chunks.join().toString())
	})
})