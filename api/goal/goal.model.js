const mongoose = require('mongoose');
const types = ['career', 'relationships', 'health', 'wealth'];
const goalSchema = mongoose.Schema({
  _user: mongoose.Schema.Types.ObjectId,
  name: String,
  type: { type: String, enum: types },
  isChecked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('goal', goalSchema);
