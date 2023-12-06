// UserService.js
const UserRepository = require('../models/UserRepository');
const conversor = require("./converterService").convertTimeBR

    const getAllUsers = async () => {
        const users = await UserRepository.getAll();
        users.forEach(user => {
            user.dataValues.createdAt = conversor(user.dataValues.createdAt);
            user.dataValues.updatedAt = conversor(user.dataValues.updatedAt);
        });
        return users;
    }

    const getUserById = async (id) => {
        const user = await UserRepository.getOneById(id);
        user.dataValues.createdAt = conversor(user.dataValues.createdAt);
        user.dataValues.updatedAt = conversor(user.dataValues.updatedAt);
        return user;
    }

    const createUser= async (user) => {
        return await UserRepository.create(user);
    }

    const updateUser= async (user) => {
        return await UserRepository.update(user);
    }

   const  deleteUser = async (id) => {
        return await UserRepository.deleteById(id);
    }


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
