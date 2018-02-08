const mongoose = require('mongoose');

/*const Borne = mongoose.model('bornes');
const Transaction = mongoose.model('transactions');
const User = mongoose.model('users');*/

// Do I need to set up models here or in my index.js routes file?
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Borne = require('../models/Borne');

module.exports = app => {
  app.get('/bornes', async (req, res) => {
    const bornes = await Borne.find();

    if (bornes && bornes.length > 0) {
      res.status(200);
      res.send({
        statusCode: 200,
        data: bornes
      });
    } else {
      res.status(400);
      res.send({
        statusCode: 400,
        msg: 'No results'
      });
    }
  });
};
