import bcrypt from 'bcrypt'

const passwordHashing = async(password:string) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword
    }
    catch(error){
    return('password')
    }
}
export default passwordHashing