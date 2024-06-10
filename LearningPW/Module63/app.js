require("dotenv").config();
const express = require("express");
const cors = require('cors');


const connectToDb = require('./config/db.js')

const app = express();

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//init connection to db
connectToDb()

const userRoutes = require('./routes/user.routes.js')
app.get("/" , userRoutes);

module.exports = app;
