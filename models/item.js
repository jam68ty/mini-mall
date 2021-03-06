let mongoose = require('mongoose')

// item Schema
let itemSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  amount:{
    type: String,
    required: true
  }
  
})

let Item = module.exports = mongoose.model('Item', itemSchema)