var express = require('express');
var app = express();
var generateHaiku = require('./js/generateHaiku.js');

app.use(express.static('public'));

// GET: / - home
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/haiku', function(req, res) {
  res.send(generateHaiku.create());
});


app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(3000, function(){
  console.log('App is listening on port 3000!');
});

