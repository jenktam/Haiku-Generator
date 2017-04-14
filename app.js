var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


// GET: / - home
app.get('/', function(req, res) {
  // res.send('Hello World!');
  res.render("index");
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
});

app.listen(3000, function(){
  console.log('Exmaple app is listening on port 3000!');
});

module.exports = express;
