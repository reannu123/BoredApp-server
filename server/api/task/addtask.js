const express = require("express");
const router = express.Router();
const TasksController = require("../../controllers/TasksController");
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  TasksController.addTask
);

module.exports = router;
