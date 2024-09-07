const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/properties', propertyController.getProperties);
router.get('/users', propertyController.getUsers);
router.post('/properties/:propertyId/users', propertyController.updatePropertyUsers);

module.exports = router;
