const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRouter")
const TaskRouter = require("./TaskRouter")

router.use("/", UserRouter)
router.use("/", TaskRouter)


module.exports = router;