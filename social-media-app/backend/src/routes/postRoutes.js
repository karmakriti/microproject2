const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post
router.post('/', postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a single post by ID
router.get('/:id', postController.getPostById);

// Update a post by ID
router.put('/:id', postController.updatePost);

// Delete a post by ID
router.delete('/:id', postController.deletePost);

// Like a post
router.post('/:id/like', postController.likePost);

// Share a post
router.post('/:id/share', postController.sharePost);

module.exports = router;