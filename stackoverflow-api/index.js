const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/*require('./app/models/Borne');
require('./app/models/User');
require('./app/models/Transaction');*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// I let this line but you can remove it and use data files instead
mongoose.connect('MONGODB_URI', (err, database) => {
  if (err) return console.log(err);

  require('./app/routes')(app);

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log('We are live on ' + PORT);
  });
});
