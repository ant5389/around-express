const mongoose = require('mongoose');
const userSchema = require('./user.js');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
    // validate: {
    //   validator: (v) => {
    //     return ;
    //   }
    // }
  },
  owner: {
    userSchema,
    required: true
  },
  likes: [{
    userSchema,
    default: []
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);
