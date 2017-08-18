// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

// testing code for omdb api

var request = require('request');
var url = require('url');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.write('Hello world!');
  res.end();
});

app.get('/movie/:title', function (req, res) {
  var options = {
    protocol: 'http:',
    host: 'www.omdb.com',
    charset: 'UTF-8',
    query: {
      t: req.params.title
    }
  };

  res.write('say this:');
  var searchURL = url.format(options);
  request(searchURL).pipe(res);
});

app.listen(3000);

// end test code for omdb api