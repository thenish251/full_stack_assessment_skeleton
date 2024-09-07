const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  };
  
  app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', propertyRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
