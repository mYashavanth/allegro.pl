const User = require("../models/user.model");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

let userData = {};
let otp = "";
const verify = async (req, res) => {
  try {
    const { userName, email, password, mobileNumber } = req.body;
    userData = { userName, email, password, mobileNumber };
    otp = Math.floor(100000 + Math.random() * 900000);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP",
      text: `Your OTP is ${otp}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "OTP sent", otp: otp, userData: userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  const { userOtp } = req.body;
  console.log({ otp, userOtp });
  const { userName, email, password, mobileNumber } = userData;

  try {
    if (otp != userOtp) {
      throw new Error("Invalid OTP");
    }
    const isEmail = validator.isEmail(email);
    if (!isEmail) {
      throw new Error({ msg: "Please enter a valid email address" });
    }
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    });
    if (!isStrongPassword) {
      throw new Error({ msg: "Please enter a strong password" });
    }
    const isMobileNumber = validator.isMobilePhone(mobileNumber, "en-IN");
    if (!isMobileNumber) {
      throw new Error({ msg: "Please enter a valid mobile number" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        throw new Error({ err });
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
          res.status(500).json({ msg: err.message });
        });
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw new Error(err);
      } else {
        const authToken = jwt.sign(
          { userID: user._id },
          process.env.AUTH_TOKEN,
          {
            expiresIn: "1h",
          }
        );
        const refreshToken = jwt.sign(
          { userID: user._id },
          process.env.REFRESH_TOKEN,
          {
            expiresIn: "7d",
          }
        );
        res.cookie("authToken", authToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
          sameSite: "none",
          //   secure: true,
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
          sameSite: "none",
          //   secure: true,
        });
        res
          .status(200)
          .json({ msg: "Login successful", user, authToken, refreshToken });
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.clearCookie("refreshToken");
    res.status(200).json({ msg: "Logout successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

module.exports = { signup, login, verify, logout };
