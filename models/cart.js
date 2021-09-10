let mongoose = require('mongoose')

// user Schema
let cartSchema = mongoose.Schema({
  productID:{
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }

  
  
})

let Cart = module.exports = mongoose.model('Cart', cartSchema)