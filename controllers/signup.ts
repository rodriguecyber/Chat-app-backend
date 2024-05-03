import userValidation from "../validations/userValidation";
import User from "../models/userSchema";
import { Request, Response } from "express";

const signup = async(req:Request,res:Response)=>{
    try {
        // Validate request body using Joi schema
        const { error, value: validatedUser } = userValidation.validate(req.body);
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
}
export default signup