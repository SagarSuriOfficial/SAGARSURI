require('dotenv').config();

const mongoose = require("mongoose");

const MONGODB_URL =
  process.env.MONGODB_URL || `mongodb://localhost:27017/module64`;

// mongoose.connect(`mongodb://localhost:27017/`)

const databaseConnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`Connect to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};


module.exports = databaseConnect;