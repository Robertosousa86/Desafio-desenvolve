const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URL || 'localhost/test';

try {
  const connect = () =>
    mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  module.exports = {
    connect,
    connection: mongoose.connection,
  };
} catch (error) {
  console.error('Error!: ', error);
}
