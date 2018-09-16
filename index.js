const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { router } = require('./routes/mainRoutes.js');

const PORT = 1337;
const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/q_learning', { promiseLibrary: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
    console.log('Mongoose Connected');
});

app.use(morgan(`tiny`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/q-learn', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});