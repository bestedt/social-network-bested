// import my dependencies
const express = require('express');
const db = require('./config/connection');
const { User, Thought } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing my routes
const usersRoutes = require('./routes/api/users');
const thoughtsRoutes = require('./routes/api/thoughts');

// using my routes
app.use('/api/users', usersRoutes);  
app.use('/api/thoughts', thoughtsRoutes);  

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
