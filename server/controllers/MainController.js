class MainController {
  static async index(req, res, next) {
    res.send(["user", "task"]);
  }
}

module.exports = MainController;
