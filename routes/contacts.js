const express = require("express");
const router = express.Router();

//@route GET api/users
//@desc Get all users contacts
//@access Private

router.post("/", (req, res) => {
  res.send("Register a user");
});

//@route POST api/users
//@desc Add new contacts
//@access Private

router.post("/", (req, res) => {
  res.send("add contact");
});

//@route POST api/contacts/:id
//@desc Update contact
//@access Private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route DELETE api/contacts/:id
//@desc DELETE contact
//@access Private

router.put("/:id", (req, res) => {
  res.send("DELETE contact");
});

module.exports = router;
