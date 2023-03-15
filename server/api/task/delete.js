const express = require("express");
const router = express.Router();
const TasksController = require("../../controllers/TasksController");
const passport = require("passport");

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  TasksController.deleteTask
);

module.exports = router;
