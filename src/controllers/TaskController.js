const TaskService = require("../services/TaskService")


const getAll = async(req, res) =>{
    try{
    const tasks = await TaskService.getAllTasks()
    if(tasks == undefined) return res.status(404).json({message: "Tasks not found"});
    return res.status(200).json(users);
    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

const getOneByUser = async(req, res) =>{
    try{
    const task = await TaskService.getOneById(req.params.id)
    if(task == undefined) return res.status(404).json({message: "Task not found"});

    return res.status(200).json(user);
    }catch(error){
        return res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAll,
    getOneByUser
}