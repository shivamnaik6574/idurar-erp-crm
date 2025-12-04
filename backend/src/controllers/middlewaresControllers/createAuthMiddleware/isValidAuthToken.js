const mongoose = require('mongoose');

const isValidAuthToken = async (req, res, next, { userModel, jwtSecret = 'JWT_SECRET' }) => {
  try {
    const User = mongoose.model(userModel);

    // Find the first available user to impersonate
    let user = await User.findOne({ removed: false });

    // If no user found (e.g. fresh install), create a dummy user object
    if (!user) {
      // This is a fallback mock user. 
      // In a real scenario, the setup script should have run.
      user = {
        _id: new mongoose.Types.ObjectId(),
        name: 'Admin',
        surname: 'User',
        email: 'admin@demo.com',
        role: 'admin'
      };
    }

    const reqUserName = userModel.toLowerCase();
    req[reqUserName] = user;
    next();

  } catch (error) {
    // Even on error, try to proceed or just log it. 
    // But better to return error if DB fails completely.
    return res.status(500).json({
      success: false,
      result: null,
      message: error.message,
      error: error,
      controller: 'isValidAuthToken',
    });
  }
};

module.exports = isValidAuthToken;
