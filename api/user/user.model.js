const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Please provide a valid email.'],
    unique: [true, 'That email is already taken.']
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
