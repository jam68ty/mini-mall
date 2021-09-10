var express = require('express');
var router = express.Router();

// Bring in Models
let Item = require('../models/item')
let Cart = require('../models/cart')

/* GET Items . */
router.get('/', function(req, res, next) {
 
  Item.find({}, function(err, items){
    if (err) {
      console.log(err)
    } else {
      res.render('pages/seller', { items: [...items] });
      
    }
  })
});

// Get Edit Form
router.get('/edit/:id', function(req,res){
  Item.findById(req.params.id, function(err, items){
    res.render('pages/editPost',{
      items: items
    })
  })
})

//Post Edit Route
router.post('/edit/:id', function(req, res){
  let item = {}
  item.productName = req.body.productName
  item.price = req.body.price
  item.amount=req.body.amount

  let query = { _id: req.params.id }
  Item.update(query, item, function(err){
    if(err){
      console.log(err)
      return
    } else {
      res.redirect('/pages')
    }
  })
})

// DELETE Route
router.delete('/delete/:id', function(req, res){
  let query = { _id: req.params.id}
  Item.remove(query, function(err){
    if(err){
      console.log()
    }
    res.send('Success')
  })
})


module.exports = router;