import { Request, Response } from "express";
import User from "../models/userSchema";
import { loginToken } from "../middleware/authToken";
import { verifyPassword } from "../middleware/passwordHashing";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (user) {
      if (await verifyPassword(password, user.password as string)) {
        const token = await loginToken(user)
        res.status(200).json({ message: "loged in", token: token });
      } else {
        res.status(401).json("password not match");
      }
    } else {
      res.status(401).json("user not found");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export default login;
