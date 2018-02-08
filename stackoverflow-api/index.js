const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/*
 require('./app/models/Borne');
 require('./app/models/User');
 require('./app/models/Transaction');
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// I let this line but you can remove it and use data files instead
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/so-help', (err, database) => {
    if (err) return console.log(err);

    require('./app/routes')(app);

    const PORT = process.env.PORT || 8000;
    return app.listen(PORT, () => {
	console.log('We are live on ' + PORT);
    });
});
