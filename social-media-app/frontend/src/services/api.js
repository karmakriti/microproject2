import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// User Registration
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// User Login
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Fetch Posts
export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

// Create Post
export const createPost = async (postData) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
};

// Update Post
export const updatePost = async (postId, postData) => {
    const response = await axios.put(`${API_URL}/posts/${postId}`, postData);
    return response.data;
};

// Delete Post
export const deletePost = async (postId) => {
    const response = await axios.delete(`${API_URL}/posts/${postId}`);
    return response.data;
};

// Like Post
export const likePost = async (postId) => {
    const response = await axios.post(`${API_URL}/posts/${postId}/like`);
    return response.data;
};

// Share Post
export const sharePost = async (postId) => {
    const response = await axios.post(`${API_URL}/posts/${postId}/share`);
    return response.data;
};

// Fetch Comments for a Post
export const fetchComments = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
};

// Create Comment
export const createComment = async (postId, commentData) => {
    const response = await axios.post(`${API_URL}/posts/${postId}/comments`, commentData);
    return response.data;
};

// Delete Comment
export const deleteComment = async (postId, commentId) => {
    const response = await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
    return response.data;
};