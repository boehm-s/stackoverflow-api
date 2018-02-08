const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  name: {
    firstName: { type: String },
    lastName: { type: String }
  },
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('users', userSchema);
