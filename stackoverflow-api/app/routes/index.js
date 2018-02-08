const bornesRoutes = require('./bornesRoutes');
const transactionsRoutes = require('./transactionsRoutes');

const User = require('../models/User');
const Borne = require('../models/Borne');
const Transaction = require('../models/Transaction');

module.exports = app => {
    app.all('/*', function(req, res, next) {
	// CORS headers
	res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-Type,User-Agent');

	if (req.method == 'OPTIONS') {
	    res.status(200).end();
	} else {
	    next();
	}
    });

  // Load routes
  bornesRoutes(app);
  transactionsRoutes(app);

  // Default route: 404 Error
  app.all('*', function(req, res) {
    res.status(404);
    res.json({
      statusCode: 404,
      msg: 'Not Found'
    });
  });
};
