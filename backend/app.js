const express = require('express');
const sequelize = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', propertyRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
