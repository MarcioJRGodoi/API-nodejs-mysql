const TaskModel = require("../models/TaskRepository")


const getAll = async(req, res) =>{
    const users = await TaskModel.getAll();
    return res.status(200).json(users);
}

const getOneByUser = async(req, res) =>{
    const users = await TaskModel.getOneByUser(req.params.id);
    return res.status(200).json(users);
}

module.exports = {
    getAll,
    getOneByUser
}