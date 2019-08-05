const express = require("express");
const router = express.Router();

//@route get api/auth
//@desc get loggedin user
//@access Private

router.get("/", (req, res) => {
  res.send("get logged in user");
});

//@route POST api/auth
//@desc Auth user n get token
//@access Public

router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
