// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);
var request = require('request');
var url = require('url');
var express = require('express');
var app = express();

app.get(':title', function(req, res){
  var options = {
    protocol: 'http:',
    host: 'www.omdb.com',
    query: {
      t: req.params.name
    }
  }

  res.write("say this:");
  var searhURL = url.format(options);
  request(searchURL).pipe(res);
});

app.listen(8080);
