const jwt = require('jsonwebtoken');

const authUser = async (req, res, { user }) => {
  // Generate a token just so frontend has something to store
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '24h' }
  );

  // We don't need to update loggedSessions since we disabled the check in isValidAuthToken

  res.status(200).json({
    success: true,
    result: {
      _id: user._id,
      name: user.name,
      surname: user.surname,
      role: user.role,
      email: user.email,
      photo: user.photo,
      token: token,
    },
    message: 'Successfully login user',
  });
};

module.exports = authUser;
