const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    username: {type: String, required:true},
    userEmail:String,
    productName: {type:String, required: true},
    productQuantity: {type: Number, required:true},
    productPrice: {type:Number, required:true}

   
})

const model = mongoose.model("inventory", InventorySchema)

module.exports = model;