const UserDAO = require("../dao/UserDAO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UsersController {
  static async getUsers(req, res, next) {
    try {
      const users = await UserDAO.getUsers();
      users.length > 0 ? res.send(users) : res.json("No Users Found");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async registerUser(req, res, next) {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UserDAO.makeUser(username, hashedPassword);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { username, password } = req.body;

      // Check user from database
      const user = await UserDAO.getUsers(username);

      // If user does not exist, return 400
      if (user[0] == null) {
        return res.status(400).json({ message: "Cannot find user" });
      }
      // If user exists, check password
      try {
        // compare password with hashed password
        if (await bcrypt.compare(password, user[0].password)) {
          const accessToken = jwt.sign(
            { username: user[0].username },
            process.env.ACCESS_TOKEN_SECRET
          );
          res.json({ accessToken: accessToken });
        } else {
          res.send("Not Allowed");
        }
      } catch (error) {
        console.log("Failed to compare: ", error.message);
        res.status(500).json({ message: error.message });
      }
    } catch (error) {
      console.log("Failed to login: ", error.message);
      res.status(500).json({ message: error.message });
    }
  }

  static async logoutUser(req, res, next) {
    console.log("Logged out from server");
  }
}

module.exports = UsersController;
