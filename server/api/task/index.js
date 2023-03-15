const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(["add", "delete", "done", "gettasks"]);
});

router.use("/add", require("./addtask"));
router.use("/delete", require("./delete"));
router.use("/updatestatus", require("./done"));
router.use("/getall", require("./gettasks"));

module.exports = router;
