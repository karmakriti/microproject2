import React, { useState } from 'react';

const Post = ({ post, onDelete, onLike }) => {
    const [likes, setLikes] = useState(post.likes);

    const handleLike = () => {
        setLikes(likes + 1);
        onLike(post.id);
    };

    const handleDelete = () => {
        onDelete(post.id);
    };

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Post;