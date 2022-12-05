const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello board");
});

router.get("/", (req, res) => {
  res.send("글쓰기");
});

module.exports = router;
