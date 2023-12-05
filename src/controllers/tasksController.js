const userModel = require("../models/UserRepository")


const getAll = async(req, res) =>{
    const users = await userModel.getAll();
    return res.status(200).json(users);
}

module.exports = {
    getAll,
}