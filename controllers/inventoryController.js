const inventoryModel = require("../models/inventoryModel")


const InventoryController = {
  // Create a new inventory item
  createInventory: async (req, res) => {
    try {
      const newInventoryItem = new inventoryModel(req.body);
      const savedItem = await newInventoryItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Edit an inventory item by ID
  editInventoryById: async (req, res) => {
    try {
      const updatedItem = await inventoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
      );
      if (!updatedItem) {
        return res.status(404).json({ message: 'Inventory item not found' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete an inventory item by ID
  deleteInventoryById: async (req, res) => {
    try {
      const deletedItem = await inventoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Inventory item not found' });
      }
      res.json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Find an inventory item by email
  findInventoryByEmail: async (req, res) => {
    try {
      const items = await inventoryModel.find({ userEmail: req.params.email });
      if (items.length === 0) {
        return res.status(404).json({ message: 'No inventory items found for this email' });
      }
      res.json(items);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Find all inventory items
  findAllInventory: async (req, res) => {
    try {
      const items = await inventoryModel.find({});
      res.json(items);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = InventoryController;
