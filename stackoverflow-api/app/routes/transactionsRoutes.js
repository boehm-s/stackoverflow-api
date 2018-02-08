const mongoose = require('mongoose');

mongoose.Promise = Promise;

const User = require('../models/User');
const Borne = require('../models/Borne');
// const Comment = require('../models/Comment');
const Transaction = require('../models/Transaction');

module.exports = app => {
    app.get('/user/:id/transactions', async (req, res) => {
	// Display all transactions for a user
	const ObjectID = require('mongodb').ObjectID;

	const id = req.params.id;

	const transactions = await Transaction.find({
	    _user: new ObjectID(id),
	    status: { $nin: ['booked', 'charging', 'charged', 'left'] }
	})
		  .populate('_user')
		  .populate('_borne')
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
