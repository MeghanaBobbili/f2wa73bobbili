var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) {
    var r = Math.random();
    var x;
    x = req.query.x;
    if(x==undefined)
    {
        x=r;
    }

  res.render('computation', { title: `f(${x}) is ${Math.cbrt(x)}` });
})

/* GET home page. */
router.get(`/`,function(req,res,next){
res.render('computation', { title: `f(${x}) is ${Math.cbrt(x)}` });
res.end();
});

module.exports = router;