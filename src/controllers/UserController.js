const userService = require('../services/UserService');

const getAll = async(req, res) =>{
    try {
    const users = await userService.getAllUsers();
    if(users == undefined) return res.status(404).json({message: "Users not found"});
    return res.status(200).json(users);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
}}

const getOneById = async(req, res) =>{
    try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if(user == undefined) return res.status(404).json({message: "Users not found"});
    return res.status(200).json(user);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })  
}}

const create = async(req, res) =>{
    try {
    const user = req.body;
    const newUser = await userService.createUser(user);
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
        const updatedUser = await userService.updateUser(user);
        return res.status(200).json(updatedUser);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
    }
}

const deleteById = async(req, res) => {
    try{
        const { id } = req.params;
        const deletedUser = await userService.deleteUser(id);
        return res.status(200).json(deletedUser);
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
    deleteById
}