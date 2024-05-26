import fs from 'fs'
import { Dialect } from 'sequelize';
const env = process.env.NODE_ENV  || 'test'

interface DBConfig{
  username: string;
  password: string | null;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
}
interface Config{
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
} 

const config = {
  test:{
    username:process.env.DB_USER as string,
    password:process.env.DB_PASSWORD as string,
    database:process.env.DB_NAME as string,
    host:process.env.DB_HOST as string,
    port:3306,
    dialect:'mysql' as Dialect
    
  },
  production:{
    username:process.env.DB_USER as string,
    password:process.env.DB_PASSWORD as string,
    database:process.env.DB_NAME as string,
    host:process.env.DB_HOST as string,
    port:3306,
    dialect:'mysql' as Dialect

  },
  development:{
    username:process.env.DB_USER as string,
    password:process.env.DB_PASSWORD as string,
    database:process.env.DB_NAME as string,
    host:process.env.DB_HOST as string,
    port:3306,
    dialect:'mysql' as Dialect

  }
 }
 fs.writeFileSync('config/config.json', JSON.stringify(config, null, 2));

 export default  config [env as keyof Config]