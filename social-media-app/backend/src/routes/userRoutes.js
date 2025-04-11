const express = require('express');
const { registerUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for getting user profile
router.get('/profile/:id', getUserProfile);

// Route for updating user profile
router.put('/profile/:id', updateUserProfile);

module.exports = router;