//用户管理model
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  sex: String,
  age: String,
  address: String,
  time: String
}, {collection: 'user'});

const User = module.exports = mongoose.model('user', userSchema);