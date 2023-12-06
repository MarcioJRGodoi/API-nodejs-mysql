const userModel = require("../models/UserRepository")


const getAll = async(req, res) =>{
    try {
    const users = await userModel.getAll();
    return res.status(200).json(users);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
}}

const getOneById = async(req, res) =>{
    try {
    const { id } = req.params;
    const user = await userModel.getOneById(id);
    return res.status(200).json(user);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })  
}}

const create = async(req, res) =>{
    try {
    const user = req.body;
    const newUser = await userModel.create(user);
    return res.status(201).json(newUser);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
    }
}

const update = async(req, res) => {
    try{
        const user = req.body;
        const updatedUser = await userModel.update(user);
        return res.status(200).json(updatedUser);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
    }
}

module.exports = {
    getAll,
    getOneById,
    create,
    update,
}