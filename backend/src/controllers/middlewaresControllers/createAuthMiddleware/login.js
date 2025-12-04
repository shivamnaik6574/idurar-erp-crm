const mongoose = require('mongoose');
const authUser = require('./authUser');

const login = async (req, res, { userModel }) => {
  const UserModel = mongoose.model(userModel);

  // Try to find user by email if provided, otherwise first user
  let user = null;
  if (req.body.email) {
    user = await UserModel.findOne({ email: req.body.email, removed: false });
  }

  if (!user) {
    user = await UserModel.findOne({ removed: false });
  }

  if (!user) {
    // Create a dummy user in memory if DB is empty
    user = {
      _id: new mongoose.Types.ObjectId(),
      name: 'Admin',
      surname: 'User',
      email: 'admin@demo.com',
      role: 'admin',
      photo: null
    };
  }

  // Call authUser
  authUser(req, res, { user });
};

module.exports = login;
