const express = require("express");
const userRouter = express.Router();
const { signup, login, verify, logout } = require("../controller/user.controller");



userRouter.post("/verify", verify); 

userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.get("/logout", logout);
module.exports = userRouter;
