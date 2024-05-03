import { Request, Response } from "express";
import User from "../models/userSchema";

const login = async (req:Request,res:Response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({email});
      if(user){
          if(user.password === password){
              res.status(200).json({message:'logged in'})
          }
          else{
              res.status(401).json({message:"password dosn't match"})
          }
      }
      else{
          res.status(401).json({message:"user not found"})
      }
      
      
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
};
export default login