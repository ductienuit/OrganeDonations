const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Organ = require('./routes/organ.route');
const Blockchain = require('./routes/blockchain.route');
const { MONGO_URL } = require('./config/config.mongo');

mongoose.connect(MONGO_URL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/organ', Organ);
app.use('/blockchain', Blockchain);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});
