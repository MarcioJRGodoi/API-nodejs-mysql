const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

router.get('/task', taskController.getAll);
router.get('/task/:id', taskController.getOneByUser);


module.exports = router;