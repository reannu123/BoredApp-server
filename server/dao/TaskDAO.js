const TaskModel = require("../models/TaskModel");

class TaskDAO {
  static async addTask(username, task) {
    const newtask = new TaskModel({ username, task });
    return newtask.save();
  }

  static async deleteTask(username, taskID) {
    const task = await TaskModel.findById(taskID);

    if (!task) {
      return null;
    }

    if (task.username === username) {
      return TaskModel.findByIdAndDelete(taskID);
    }
    return "Forbidden";
  }

  static async getTasks(username = null) {
    if (username) {
      return TaskModel.find({ username });
    }
    return TaskModel.find();
  }

  static async updateTask(username, status, taskID) {
    const task = await TaskModel.findById(taskID);

    if (!task) {
      return null;
    }

    if (task.username === username) {
      return TaskModel.findByIdAndUpdate(taskID, { done: status });
    }
    return "Forbidden";
  }
}

module.exports = TaskDAO;
