var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('hello');
    console.log('someone has visited here')
});

module.exports = router;


//THIS IS NO LONGER USED 