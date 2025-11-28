// server.js

// Load environment variables from .env file
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));


// --- MIDDLEWARE ---

// 1. CORS: Allows your frontend to make requests to the backend
app.use(cors()); 

// 2. Body Parser: Allows Express to read incoming JSON data from the frontend
app.use(express.json());


// --- ROUTES ---

// Simple test route
app.get('/', (req, res) => {
    res.send('Anchor Backend is running!');
});

// Import and use your authentication routes
const authRouter = require('./routes/auth');
app.use('/api', authRouter); 

// NEW LINES BELOW: Import and use your feedback routes
const feedbackRouter = require('./routes/feedback');
app.use('/api/feedback', feedbackRouter);

// --- SERVER START ---
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});