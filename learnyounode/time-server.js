var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.write(strftime('%F %R')+'\n')
  socket.end()
})
server.listen(process.argv[2])