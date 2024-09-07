const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'mysql_ctn_final', // Service name defined in docker-compose
  dialect: 'mysql'
});

module.exports = sequelize;
