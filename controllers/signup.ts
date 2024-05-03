import userValidation from "../validations/userValidation";
import User from "../models/userSchema";
import { Request, Response } from "express";
import passwordHashing from "../middleware/passwordHashing";

const signup = async (req: Request, res: Response) => {
  try {
    const userdata = {
      fullName: req.body.Fullname,
      username: req.body.username,
      email: req.body.email,
      profilepic: req.body.profilepic,
      password:await passwordHashing(req.body.password),
    };
    // Validate request body using Joi schema
    const { error, value: validatedUser } = userValidation.validate(userdata);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create a new User instance with validated data
    const user = new User(validatedUser);

    // Save user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export default signup;
