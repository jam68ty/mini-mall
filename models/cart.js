let mongoose = require('mongoose')

// user Schema
let cartSchema = mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }

  
  
})

let Cart = module.exports = mongoose.model('Cart', cartSchema)