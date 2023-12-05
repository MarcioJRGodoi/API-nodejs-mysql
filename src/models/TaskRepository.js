const UserModel = require("./UserModel");
const _context = require("./db");

const getAll = async (req, res, next) => {
        const users = (await _context).Task.findAll();
        return users;
}

const getOneByUser = async (req, res, next) => {
    const tasks = await (await _context).Task.findAll({
        where: {
            userId: 1
        }
    });
    return tasks;
}

module.exports = {
    getAll,
    getOneByUser
}