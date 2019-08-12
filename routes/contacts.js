const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
<<<<<<< HEAD

=======
>>>>>>> 8d114b7c2af1bb14b0f26bab506060fc91d45764
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
<<<<<<< HEAD

=======
>>>>>>> 8d114b7c2af1bb14b0f26bab506060fc91d45764
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
<<<<<<< HEAD
      check("name", "name is required")
=======
      check("name", "Name is required")
>>>>>>> 8d114b7c2af1bb14b0f26bab506060fc91d45764
        .not()
        .isEmpty()
    ]
  ],
<<<<<<< HEAD
  (req, res) => {
    //res.send("add contact");

=======
  async (req, res) => {
    //res.send("add contact");
>>>>>>> 8d114b7c2af1bb14b0f26bab506060fc91d45764
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
<<<<<<< HEAD
    const {name,email,phone,type}=req.body;
    
=======
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
>>>>>>> 8d114b7c2af1bb14b0f26bab506060fc91d45764
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
