const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("../db/db")
const cors = require("cors");

const app = express()

// middleware 
app.use(cors())
app.use(bodyParser.json())


// database connection 
connectDB()

