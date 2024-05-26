import { Sequelize } from "sequelize";
import config from './loadConfig';

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host:config.host,
    dialect:config.dialect,
    port:config.port
  }
);

db.authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Unable to connect to database', err);
  });

export default db;
