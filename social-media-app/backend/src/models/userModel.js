const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        bio: {
            type: String,
            trim: true
        },
        profilePicture: {
            type: String,
            default: 'default.jpg'
        },
        socialLinks: {
            facebook: {
                type: String,
                trim: true
            },
            twitter: {
                type: String,
                trim: true
            },
            instagram: {
                type: String,
                trim: true
            }
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;