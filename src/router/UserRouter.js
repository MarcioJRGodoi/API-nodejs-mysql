const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOneById)
router.post('/users', userController.create)
router.put('/users', userController.update)

module.exports = router;