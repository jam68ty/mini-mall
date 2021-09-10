var express = require('express');
var router = express.Router();

let Cart = require('../models/cart')


router.get('/', function(req, res, next) {
  Cart.find({}, function(err, carts){
    if (err) {
      console.log(err)
    } else {
      res.render('pages/cart', { carts: [...carts] });
    }
  })
});

// DELETE Route
router.delete('/delete/:id', function(req, res){
  let query = { _id: req.params.id}
  console.log(req.params.id)
  Cart.remove(query, function(err){
    if(err){
      console.log()
    }
    res.send('Success')
  })
})

module.exports = router;