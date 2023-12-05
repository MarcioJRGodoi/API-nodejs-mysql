const express = require("express");
const tasksController = require("./controllers/tasksController");

const router = express.Router();
router.get('/users', tasksController.getAll);

module.exports = router;