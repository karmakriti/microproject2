import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {posts.length > 0 ? (
                posts.map(post => <Post key={post._id} post={post} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default HomePage;