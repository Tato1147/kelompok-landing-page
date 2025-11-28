// models/Feedback.js

const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    //links the feedback to the user who submitted it
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //references the User model
    },
    //the type of submission (suggestion, bug, general)
    type: {
        type: String,
        required: true
    },
    //the message content
    message: {
        type: String,
        required: true
    },
    //the timestamp will be automatically added
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);