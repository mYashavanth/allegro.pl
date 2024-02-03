const express = require("express");
const userRouter = express.Router();
const validator = require("validator");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

userRouter.post("/signup", (req, res) => {
  try {
    const { userName, email, password, mobileNumber } = req.body;
    const isEmail = validator.isEmail(email);
    if (!isEmail) {
      throw new Error("Please enter a valid email address");
    }
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    });
    if (!isStrongPassword) {
      throw new Error("Please enter a strong password");
    }
    const isMobileNumber = validator.isMobilePhone(mobileNumber, "en-IN");
    if (!isMobileNumber) {
      throw new Error("Please enter a valid mobile number");
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        throw new Error(err.message);
      }
      const user = new User({
        userName,
        email,
        password: hash,
        mobileNumber,
      });
      await user
        .save()
        .then(() => {
          res.status(200).json({ msg: "User created successfully" });
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = userRouter;
