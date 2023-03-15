const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("tasks", taskSchema);
