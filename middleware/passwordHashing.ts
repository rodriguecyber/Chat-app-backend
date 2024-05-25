import bcrypt from 'bcrypt'

const passwordHashing = async(password:string) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword
    }
    catch(error){
   throw new Error('failed to hash password')
    }
}
  export const verifyPassword=async(password:string,hashedPassword:string)=>{
  try{

      return await bcrypt.compare(password,hashedPassword)
    }
    catch(error){
        console.log(error)
    }
     
}
export default passwordHashing