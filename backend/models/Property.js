const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Property = sequelize.define('Property', {
  address: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  state: DataTypes.STRING,
  zip_code: DataTypes.STRING,
  sqft: DataTypes.DECIMAL,
  beds: DataTypes.INTEGER,
  baths: DataTypes.INTEGER
});

module.exports = Property;
