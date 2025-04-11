import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(comment.content);

    const handleUpdate = () => {
        onUpdate(comment._id, updatedContent);
        setIsEditing(false);
    };

    return (
        <div className="comment">
            {isEditing ? (
                <div>
                    <textarea
                        value={updatedContent}
                        onChange={(e) => setUpdatedContent(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{comment.content}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(comment._id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Comment;