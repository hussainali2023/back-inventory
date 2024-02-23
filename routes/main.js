const express = require("express");
const router = express.Router()
const userRoutes = require("./userRoute")


router.use("/api/v1/user", userRoutes)

module.exports = router;

