const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/profile', authenticate, (req, res) => {
  res.json({
    email: req.user.email,
    username: req.user.username
  });
});

module.exports = router;