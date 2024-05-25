import app from './app'
import connectdb from './config/dbconfig'

const PORT = process.env.PORT 

app.listen(PORT,async()=>{
    await connectdb()
    console.log(`app is running on ${PORT}`)
})