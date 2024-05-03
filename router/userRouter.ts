import express from "express";
import signup from "../controllers/signup";
import login from "../controllers/login";
const userRouter = express.Router();

userRouter.post("/register",signup)
userRouter.post("/login", login)
export default userRouter;
