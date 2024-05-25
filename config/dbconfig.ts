import mongoose from 'mongoose'
const db=process.env.DB_CONNECTION as string
const connectdb = async()=>{

    try{
        
        await mongoose.connect(db as string)
        console.log('database connected')
    }
    catch(error){
        console.log(error)
    }
}
export default connectdb