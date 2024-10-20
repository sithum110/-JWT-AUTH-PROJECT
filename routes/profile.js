import express from 'express';
import auth from '../middleware/auth.js';  // Import the JWT middleware to protect the route
import User from '../models/User.js';      // Import the User model

const router = express.Router();

// @route GET /profile
// This route is protected by JWT, only accessible if user sends a valid token
router.get('/profile', auth, async (req, res) => {
  try {
    // Find the user by the ID attached in the token (without password)
    const user = await User.findById(req.user).select('-password');
    res.json(user);  // Send back the user data
  } catch (err) {
    res.status(500).send('serverr errororo');  // Handle any server errors
  }
});

export default router;
