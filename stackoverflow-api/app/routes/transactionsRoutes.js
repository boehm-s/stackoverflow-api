const mongoose = require('mongoose');

/*const User = mongoose.model('users');
const Transaction = mongoose.model('transactions');
const Borne = mongoose.model('bornes');
const Comment = mongoose.model('comments');*/

const User = require('../models/User');
const Comment = require('../models/Comment');
const Transaction = require('../models/Transaction');
const Borne = require('../models/Borne');

module.exports = app => {
  app.get('/user/:id/transactions', async (req, res) => {
    // Display all transactions for a user
    const ObjectID = require('mongodb').ObjectID;

    const id = req.params.id;

    const transactions = await Transaction.find({
      _user: new ObjectID(id),
      status: { $nin: ['booked', 'charging', 'charged', 'left'] }
    })
      .sort({ updatedAt: -1 })
      .limit(10);

    if (transactions && transactions.length > 0) {
      res.status(200);
      res.send({
        statusCode: 200,
        data: transactions
      });
    } else {
      res.status(400);
      res.send({
        statusCode: 400,
        msg: 'No history'
      });
    }
  });
};
