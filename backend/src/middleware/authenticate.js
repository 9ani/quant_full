const passport = require('passport');
const { Strategy: BearerStrategy } = require('passport-http-bearer');
const { findByToken } = require('../models/users');

passport.use(new BearerStrategy((token, done) => {
  const user = findByToken(token);
  if (user) {
    return done(null, user);
  } else {
    return done(null, false, { message: 'Invalid token' });
  }
}));

const authenticate = passport.authenticate('bearer', { session: false });

module.exports = authenticate;