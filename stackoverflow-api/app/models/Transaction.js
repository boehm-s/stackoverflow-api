const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  status: String,
  logs: [
    {
      state: String,
      date: Date
    }
  ],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _borne: { type: Schema.Types.ObjectId, ref: 'Borne' },
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('transactions', transactionSchema);
