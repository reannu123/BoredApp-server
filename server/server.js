const express = require("express");
const app = express();
const mongoose = require("mongoose");
// use cors

const cors = require("cors");
require("dotenv").config();
require("./auth/passport-config");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port 5000");
});
