var request = require('request');
var url = require('url');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.write(tyrion.bodyStyle);
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

let tyrion = new LeatherArmor('short');
function LeatherArmor ( bodyStyle ){
  return {bodyStyle : bodyStyle};
}

// end test code for omdb api
