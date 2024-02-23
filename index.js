const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db")
const cors = require("cors");
const userRoutes = require("./routes/userRoute")

const PORT = process.env.PORT || 5000

const app = express()

// middleware 
app.use(cors())
app.use(bodyParser.json())


// database connection 
connectDB()

//Routes
app.use("/api", userRoutes);

app.get("/", (req, res) =>{
    res.send("Server is running on properly")
})

//start the server 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

