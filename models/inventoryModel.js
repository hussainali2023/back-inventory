const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    username: {type: String, required:true},
    userEmail: {
        type: String,
        required: true,
        unique:true,
        validate: {
          validator: function(v) {
            return /\S+@\S+\.\S+/.test(v);
          },
          message: props => `${props.value} is not a valid email!`
        }
      },
    productName: {type:String, required: true},
    productQuantity: {type: Number, required:true},
    productPrice: {type:Number, required:true}

   
})

const model = mongoose.model("user", InventorySchema)

module.exports = model;