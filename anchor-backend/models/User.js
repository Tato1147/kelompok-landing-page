// models/User.js

const mongoose = require('mongoose');

//define the structure of a User document in MongoDB
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, //ensures no two users can have the same username
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, //ensures no two users can have the same email
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true //this will store the HASHED password
    },
    role: {
        type: String,
        default: 'user' //useful for admin/regular user distinction
    }
}, { timestamps: true }); //adds 'createdAt' and 'updatedAt' fields automatically

//export the model so it can be used in your routes (e.g., auth.js)
module.exports = mongoose.model('User', UserSchema);