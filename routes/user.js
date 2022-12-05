const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello main");
});

router.get("/register", (req, res) => {
  res.send("회원가입");
});

module.exports = router;
