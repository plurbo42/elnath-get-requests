var express = require('express');
var router = express.Router();

router.get('/great', function(req, res){
    res.send('This is a great string');
});

module.exports = router;