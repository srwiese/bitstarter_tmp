var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var responseBuff = fs.readFileSync('index.html');

var responseString = responseBuff.toString('utf-8');

app.get('/', function(request, response) {
  response.send(responseString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
