const UserModel = require("../models/UserModel");

class UserDAO {
  static async findUser(username) {
    return UserModel.find({ username });
  }

  static async getUsers(username = null) {
    if (username) {
      return UserModel.find({ username });
    }
    const users = await UserModel.find();
    return users.map((user) => ({ username: user.username, id: user._id }));
  }

  static async makeUser(username, password) {
    const user = new UserModel({ username, password });
    user.username = username;
    user.password = password;
    return user.save();
  }
}

module.exports = UserDAO;
