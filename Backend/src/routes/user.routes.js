const express = require("express");
const userRouter = express.Router();
const { signup, login, verify } = require("../controller/user.controller");



userRouter.post("/verify", verify); 

userRouter.post("/signup",signup);
userRouter.post("/login",login);
module.exports = userRouter;
