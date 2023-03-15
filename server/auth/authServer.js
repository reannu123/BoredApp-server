const express = require("express");
const authApp = express();
const UsersController = require("../controllers/UsersController");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

authApp.use(passport.initialize());
authApp.use(express.json());
authApp.use(
  cors({
    origin: true,
    credentials: true,
  })
);

authApp.post("/login", UsersController.loginUser);
authApp.post("/register", UsersController.registerUser);
authApp.delete("/logout", UsersController.logoutUser);

authApp.listen(process.env.PORT_AUTH, () =>
  console.log(`Auth Server Started at ${process.env.PORT_AUTH}`)
);
