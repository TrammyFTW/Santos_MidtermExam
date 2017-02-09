var fs = require('fs');
var protocol = require('http');

var file = process.argv[3];

server = protocol.createServer(function(request, response) {
  fs.createReadStream(file).pipe(response);
});
server.listen(process.argv[2]);