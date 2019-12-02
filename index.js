const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const authRoutes = require('./routes/auth');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db!'));

//  Middleware
app.use(express.json());

// Route Middleware
app.use('/api/user', authRoutes);

app.listen(3000, () => console.log('Server Up and running'));