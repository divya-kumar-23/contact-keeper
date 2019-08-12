const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

//@route GET api/users
//@desc Get all users contacts
//@access Private

router.post("/", auth, async (req, res) => {
  //res.send("Register a user");
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

//@route POST api/users
//@desc Add new contacts
//@access Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "name is required")
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    //res.send("add contact");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,phone,type}=req.body;
    
  }
);

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
