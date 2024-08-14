const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', authRoutes);
app.use('/api', profileRoutes);

module.exports = app;