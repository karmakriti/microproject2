import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        bio: ''
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userData = await getUserProfile();
                setUser(userData);
                setFormData({
                    username: userData.username,
                    email: userData.email,
                    bio: userData.bio || ''
                });
            } catch (err) {
                setError('Failed to load user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(formData);
            setUser({ ...user, ...formData });
        } catch (err) {
            setError('Failed to update profile');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            {user && (
                <div>
                    <h2>Your Posts</h2>
                    {/* Render user's posts here */}
                </div>
            )}
        </div>
    );
};

export default Profile;