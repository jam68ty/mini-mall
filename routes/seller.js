var express = require('express');
var router = express.Router();

// Bring in Models
let Item = require('../models/item')

/* GET Items . */
router.get('/', function(req, res, next) {
 
  Item.find({}, function(err, pages){
    if (err) {
      console.log(err)
    } else {
      res.render('pages/seller', { pages: [...pages] });
      
    }
  })
});


module.exports = router;