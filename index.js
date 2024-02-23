const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db")
const cors = require("cors");
const mainRoute = require("./routes/main")

const PORT = process.env.PORT || 5000

const app = express()

// middleware 
app.use(cors())
app.use(bodyParser.json())


// database connection 
connectDB()

//Routes
app.use("/", mainRoute);


// running the server on home route
app.get("/", (req, res) =>{
    res.send("Server is running on properly")
})

//start the server 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

