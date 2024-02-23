const UserModel = require("../models/userModel")

exports.createUser = async (req, res) =>{
    try{
        const user = await UserModel.create(req.body);
        res.status(201).json({
            status:"success",
            data: {
                user
            }
        })
    }
    catch(err) {
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}