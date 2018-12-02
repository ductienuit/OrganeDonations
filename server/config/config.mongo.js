const { config } = require('dotenv');

config();

const conStr = 'mongodb://user:user1234@ds137661.mlab.com:37661/hackathon';

exports.MONGO_URL = process.env.MONGO_URL || conStr;
