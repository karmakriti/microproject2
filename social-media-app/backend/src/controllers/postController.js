const Post = require('../models/postModel');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id,
            likes: 0,
            comments: []
        });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Like a post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        post.likes += 1;
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Share a post (this could be implemented in various ways, here is a simple increment)
exports.sharePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        post.shares = (post.shares || 0) + 1; // Assuming shares is a field in the post model
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};