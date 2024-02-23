const express = require('express');
const InventoryController = require("../controllers/inventoryController")

const router = express.Router();

router.post("/create-inventory", InventoryController.createInventory)
router.post("/edit-inventory/:id", InventoryController.editInventoryById)
router.get("/email-inventory/:email", InventoryController.findInventoryByEmail)

module.exports = router;
