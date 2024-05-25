import { response } from 'express'
import jwt from 'jsonwebtoken'

export  const loginToken =async(user:object)=>{
    
    try{
 
    return jwt.sign({user},process.env.SECRET_KEY as string,{expiresIn:'2h'})
    
    }
    catch(error){
      console.log(process.env.SECRET_KEY as string)
    }
}
export const verifyAuth=async(token:string)=>{
    try{
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY as string)
        if(decodedToken){
            response.status(200).json(decodedToken) 
        }
        else{
            response.status(200).json('expired') 

        }
    }
    catch(error)
    {
        throw Error('failed to verify token')
    }

}