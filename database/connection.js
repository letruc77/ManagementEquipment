const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = () =>{
  try {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Connected database successfully!');
  } catch (error) {
    console.log('Connection database error ' + error);
  }
}

const disconnect = () => {
  try {
    mongoose.disconnect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Disconnected database successfully!');
  } catch (error) {
    console.log('Disconnection database error ' + error);
  }
}

module.exports = { connection, disconnect };

