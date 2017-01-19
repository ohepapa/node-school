var http = require('http')

const PORT = process.argv[2]

var server = http.createServer(function (req, rsp) {
    if(req.method != 'POST') {
        console.log('illegal request method')
    }
    else {
		req.on('data', function (data) {
			var rspData = (data.toString()).toUpperCase()
			rsp.write(rspData)
		})		
    }
})

server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT)
})