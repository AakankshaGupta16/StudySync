// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');  // Import Prisma Client

const prisma = new PrismaClient();  // Initialize Prisma Client

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON data

// Route to create a new user
app.post('/users', async (req, res) => {
  const { email, name } = req.body;  // Extract user data from the request body
  
  try {
    const newUser = await prisma.user.create({  // Use Prisma to create a user
      data: {
        email: email,
        name: name,
      },
    });
    res.status(201).json(newUser);  // Send the created user as a response
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });  // Error handling
  }
});

// Test route to check if the server is running
app.get('/', (req, res) => res.send('API is running 🚀'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
