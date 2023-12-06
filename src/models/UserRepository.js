const _context = require("./db");

const getAll = async () => {
        const users = (await _context).User.findAll();
        return users;
}

const getOneById = async (id) => {
    const user = (await _context).User.findByPk(id);
    return user;
}

const create = async (userData) => {
    const user = await (await _context).User.create(userData)
    return user;
}

const update = async (userData) => {
    console.log(userData)
    const user = (await _context).User.findByPk(userData.id).then((user) => {
        if(user){
            user.update(userData);
            return user;
        }
    })
}

module.exports = {
    getAll,
    getOneById,
    create,
    update,
}