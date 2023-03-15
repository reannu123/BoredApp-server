const express = require("express");
const passport = require("passport");
const router = express.Router();
const MainController = require("../controllers/MainController");
const UsersController = require("../controllers/UsersController");

router.get("/", MainController.index);

router.use("/task", require("./task"));
router.use("/user", UsersController.getUsers);
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  UsersController.getUsers
);

module.exports = router;
