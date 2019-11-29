const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', UserSchema);
