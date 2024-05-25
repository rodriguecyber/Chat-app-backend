import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './router/userRouter'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/v1' ,userRouter)
export default app