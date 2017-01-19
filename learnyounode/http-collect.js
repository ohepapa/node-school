var http = require('http')

http.get(process.argv[2], function (response) {
	var resFoo=''
	response.setEncoding('utf8')
	response.on('data', function (data) { 
		resFoo += data	
	})
	response.on('end', function() {
		console.log(resFoo.length)
		console.log(resFoo)
	})
	response.on('error', console.error)
}).on('error', console.error) 