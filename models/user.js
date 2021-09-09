let mongoose = require('mongoose')

// user Schema
let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address:{
    type: String,
  },
  phoneNumber:{
    type: Number,
  }
  
})

let User = module.exports = mongoose.model('User', userSchema)