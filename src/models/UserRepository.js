const _context = require("./db");

const getAll = async (req, res, next) => {
        const users = (await _context).User.findAll();
        return users;
}

module.exports = {
    getAll,
}