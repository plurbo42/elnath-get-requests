var express = require('express');
var router = express.Router();
var quotesData = require('../modules/quotes-data');
var quote_load = 0

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', function(req, res){
    res.send('You can find quotes at /quote/random or /quote/first');
});

router.get('/all', function(req, res){
    res.send(quotesData);
});

router.get('/random', function(req, res){
    res.send(quotesData[randomNumber(0, quotesData.length-1)]); 
    quote_load++
    console.log( quote_load + ' quotes loaded')
    // res.sendStatus(500);
});

router.get('/first', function(req, res){
    res.send(quotesData[0]);
});

router.post('/new', function(req, res){
    res.sendStatus(200);
    console.log('req.body is ' , req.body)
    console.log('I AM TRYING TO ADD A NEW QUOTE')
    quotesData.push({quote: req.body.quote_to_add});
    //console.log(quotesData);
});

// router.get('/new/all', function(req, res){
//     res.send(quotesData);
// });


module.exports = router;