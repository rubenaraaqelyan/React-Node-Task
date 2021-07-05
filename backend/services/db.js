import Sequelize from "sequelize";

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;

console.log({ DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT })

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

export default sequelize;
