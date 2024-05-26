import express from 'express'
 import dotenv, { parse } from 'dotenv'
import { Sequelize } from "sequelize";
import db from './config/db'
import bodyParser from 'body-parser'
 dotenv.config()
 
 const server = express()
 const port = process.env.PORT || 5000
 server.use(bodyParser)
//  server.use()


db.authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Unable to connect to database', err);
  });

    server.listen(port,()=>{
console.log(`server is running on ${port}`)

    
})
