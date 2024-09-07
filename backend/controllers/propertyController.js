const Property = require('../models/Property');
const User = require('../models/User');
const PropertyUser = require('../models/PropertyUser');

// Get all properties
exports.getProperties = async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
};

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Update users for a property
exports.updatePropertyUsers = async (req, res) => {
  const { propertyId } = req.params;
  const { userIds } = req.body;

  // Remove old associations
  await PropertyUser.destroy({ where: { property_id: propertyId } });

  // Create new associations
  for (const userId of userIds) {
    await PropertyUser.create({ property_id: propertyId, user_id: userId });
  }

  res.json({ message: 'Users updated successfully' });
};
