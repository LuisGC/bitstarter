var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var data = fs.readFileSync(this.dir + '/index.html');
  response.send(data.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
