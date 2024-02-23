const express = require("express");
const router = express.Router()
const userRoutes = require("./userRoute")
const inventoryRoutes = require("./inventoryRoutes")


router.use("/api/v1/user", userRoutes)
router.use("/api/v1/inventory", inventoryRoutes)

module.exports = router;

