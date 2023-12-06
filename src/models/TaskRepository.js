const _context = require("../db/db");

const getAll = async () => {
        const users = (await _context).Task.findAll();
        return users;
}

const getOneByUser = async (id) => {
    const tasks = await (await _context).Task.findByPk(id);
    return tasks;
}

const createTask = async (newTask) => {
    const task = await (await _context).Task.create(newTask);
    return task;
}

const updateTask = async (task) => {
    const newTask = await (await _context).Task.findByPk(task.id).then((task) => {
        if(task){
            task.update(task);
            return task;
        }
    });
    return task;
}

const deleteTask = async (id) => {
    const deletetask = await (await _context).Task.findByPk(id).then((task) => {
        if(task){
            task.destroy();
            return task;
        }
    });
    return task;
}

module.exports = {
    getAll,
    getOneByUser,
    createTask,
    updateTask,
    deleteTask   
}