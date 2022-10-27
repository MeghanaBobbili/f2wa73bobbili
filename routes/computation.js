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

  res.render('computation', { title: `Math.cbrt(${x}) is ${Math.cbrt(x)} \n Math.atan2(${x}) is ${Math.atan2(x)} \n Math.atanh(${x}) is ${Math.atanh(x)}`});
})

/* GET home page. */
router.get(`/`,function(req,res,next){
res.render('computation', { title: `Math.cbrt(${x}) is ${Math.cbrt(x)} \n Math.atan2(${x}) is ${Math.atan2(x)} \n Math.atanh(${x}) is ${Math.atanh(x)}` });
res.end();
});

module.exports = router;