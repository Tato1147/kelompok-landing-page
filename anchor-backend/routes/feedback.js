// routes/feedback.js

const router = require('express').Router();
const Feedback = require('../models/Feedback'); 
const auth = require('../middleware/auth'); //import the auth middleware

// @route   POST /api/feedback
// @desc    submit new suggestion/feedback
// @access  private (Requires login via 'auth' middleware)
router.post('/', auth, async (req, res) => {
    try {
        const newFeedback = new Feedback({
            user: req.user.id,
            type: req.body.type,
            message: req.body.message,
            rating: req.body.rating      // ⭐ ADD THIS
        });

        const feedback = await newFeedback.save();
        res.json(feedback);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during feedback submission.');
    }
});


// @route   GET /api/feedback
// @desc    Get all feedback (Admin view)
// @access  Private (Requires login)
router.get('/', auth, async (req, res) => {
    try {
        const feedback = await Feedback.find()
            .populate('user', 'username email') // ⭐ GET username + email
            .sort({ createdAt: -1 });           // latest first

        res.json(feedback);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error fetching feedback.');
    }
});

module.exports = router;