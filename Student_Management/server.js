const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/students', studentRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});