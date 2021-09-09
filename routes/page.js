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
      res.render('pages/index', { pages: [...pages] });
      
    }
  })
});

// GET Add Item Route
router.get('/add', function(req, res){
  res.render('pages/addPost')
})

// POST Add Item Route
router.post('/add', function(req, res){
  var item = new Item({
    id: req.body.id,
    productName: req.body.productName,
    price: req.body.price,
    amount: req.body.amount
    
  });

  
  item.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({
        message: 'something went wrong'
      });
    } else {
      res.redirect('/pages')
    }
  });
})


// // Get Edit Form
// router.get('/edit/:id', function(req,res){
//   Post.findById(req.params.id, function(err, post){
//     res.render('pages/editPost',{
//       post: post
//     })
//   })
// })

// //Post Edit Route
// router.post('/edit/:id', function(req, res){
//   let post = {}
//   post.title = req.body.title
//   post.body = req.body.body

//   let query = { _id: req.params.id }
//   Post.update(query, post, function(err){
//     if(err){
//       console.log(err)
//       return
//     } else {
//       res.redirect('/pages')
//     }
//   })
// })

// // DELETE Route
// router.delete('/delete/:id', function(req, res){
//   let query = { _id: req.params.id}
//   Post.remove(query, function(err){
//     if(err){
//       console.log()
//     }
//     res.send('Success')
//   })
// })





module.exports = router;
