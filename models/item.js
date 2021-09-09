let mongoose = require('mongoose')

// item Schema
let itemSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount:{
    type: Number,
    required: true
  }
  
})

let Item = module.exports = mongoose.model('Item', itemSchema)