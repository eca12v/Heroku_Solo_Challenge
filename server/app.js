var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8080, function(){
  console.log('Hey, you somehow got into the server');
});

app.get('/', function(req, res){
  res.writeHead(200);
  res.write('guess what, you did it!');
  res.end();
});
