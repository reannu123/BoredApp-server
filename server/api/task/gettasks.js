const express = require("express");
const router = express.Router();
const TasksController = require("../../controllers/TasksController");
const passport = require("passport");

router.get("/", TasksController.getAllTasks);
router.get(
  "/mine",
  passport.authenticate("jwt", { session: false }),
  TasksController.getTasks
);

module.exports = router;
