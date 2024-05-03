import app from './app'
import connectdb from './config/dbconfig'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

app.listen(PORT,async()=>{
    await connectdb()
    console.log(`app is running on ${PORT}`)
})