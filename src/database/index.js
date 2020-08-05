const Sequelize = require("sequelize");
require("dotenv").config();
const enviroment = process.env;
const UserModel = require("../user/user.model");
const configEnv = require('./config.json');

const sequelize = new Sequelize(
  configEnv.DB_NAME,
  configEnv.DB_USER,
  configEnv.DB_PASSWORD,
  {
    host: configEnv.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
  }
  }
);

const models = {
  UserModel: UserModel.init(sequelize, Sequelize)
};

const db = {
  ...models,
  sequelize
};

module.exports = db;
