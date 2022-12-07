const { Sequelize } = require("sequelize");

// укажите ваши параметры для подкючения к postgreSQL
module.exports = new Sequelize(
  process.env.DB_NAME || "dbName",
  process.env.DB_USER || "userName",
  process.env.DB_PASSWORD || "password",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
  }
);
