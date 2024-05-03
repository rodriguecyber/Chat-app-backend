import mongoose from 'mongoose'
const db=process.env.DB_CONNECTION
const connectdb = async()=>{

    try{
        
        await mongoose.connect('mongodb://localhost:27017/chatapp')
        console.log('database connected')
    }
    catch(error){
        console.log(error)
    }
}
export default connectdb