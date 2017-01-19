var fs = require('fs');
var http = require('http')

const PORT = process.argv[2]
var filename = process.argv[3];

var server = http.createServer(function (req, res) {
  fs.createReadStream(filename).pipe(res);
})
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT)
})