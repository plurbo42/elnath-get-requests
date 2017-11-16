var express = require('express');
var bodyParser = require('body-parser');
var quote = require('./routes/quote');
var reallyGreat = require('./routes/great')
// var index = require('./routes/index')
var app = express();
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', index); //Now looking at the static file rather than index.js

app.get('/great', reallyGreat);

app.use('/quote', quote);

app.get('/dinosaur', function(req, res){
    res.send('RAWR')
});

console.log('starting up the server');

app.listen(port, function(){
    console.log('listening on port ' + port);
});



