// UserRepository.js
const _context = require("../db/db");

const getAll = async () => {
    return await (await _context).User.findAll();
}

const getOneById = async (id) => {
    return await (await _context).User.findByPk(id);
}

const create = async (userData) => {
    return await (await _context).User.create(userData);
}

const update = async (userData) => {
    return (await _context).User.findByPk(userData.id).then((user) => {
        if(user){
            user.update(userData);
            return user;
        }
    });
}

const deleteById = async (id) => {
    return (await _context).User.findByPk(id).then((user) => {
        if(user){
            user.destroy();
            return user;
        }
    });
}

module.exports = {
    getAll,
    getOneById,
    create,
    update,
    deleteById
}
