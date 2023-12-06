const Task = require("../models/TaskRepository");
const conversor = require("./converterService").convertTimeBR

const getAllTasks = async () => {
    const tasks = await Task.getAll();
    if(tasks === null) return;
    tasks.forEach(task => {
        task.dataValues.createdAt = conversor(task.dataValues.createdAt);
        task.dataValues.updatedAt = conversor(task.dataValues.updatedAt);
    });
    return tasks;
}

const getOneById = async (id) => {
    const task = await Task.getOneByUser(id);
    if(task === null) return;
    task.dataValues.createdAt = conversor(task.dataValues.createdAt);
    task.dataValues.updatedAt = conversor(task.dataValues.updatedAt);
    return task;
}

const createTask = async(task) => {
    return await Task.createTask(task);
}

const updateTask = async (task) => {
    return await Task.updateTask(task);
}
const deleteTask = async (task) => {
    return await Task.deleteTask(task);
}

module.exports = {
    getAllTasks,
    getOneById,
    createTask,
    updateTask,
    deleteTask
}