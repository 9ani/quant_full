const { findByEmail } = require('../models/users');

const login = (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email);

  if (user && user.password === password) {
    const accessToken = user.token;
    res.json({ accessToken });
  } else {
    res.status(403).json({ message: 'Invalid email or password' });
  }
};

module.exports = { login };