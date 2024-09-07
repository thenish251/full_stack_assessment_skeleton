const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PropertyUser = sequelize.define('PropertyUser', {
  property_id: {
    type: DataTypes.INTEGER,
    references: { model: 'Property', key: 'id' }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: { model: 'User', key: 'id' }
  }
});

module.exports = PropertyUser;
