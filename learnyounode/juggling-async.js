var http = require('http')
var async = require('async');

var tasks = [process.argv[2], process.argv[3], process.argv[4]]
async.eachSeries(tasks, function (item, callback) {
	http.get(item, function (response) {
		var result = ''
		response.setEncoding('utf8')
		response.on('data', function (data) { 
			result += data
		})
		response.on('end', function() {	
			console.log(result)
			callback()
		})
		response.on('error', console.error)
	}).on('error', console.error) 	
}, function () {
	//resArray.forEach(console.log)
	//console.log('finished...')
})

