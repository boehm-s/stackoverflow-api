const mongoose = require('mongoose');
const { Schema } = mongoose;

//const CommentSchema = require('./Comment.js');

const borneSchema = new Schema({
  name: String,
  description: String,
  address: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  //comments: [CommentSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('bornes', borneSchema);
