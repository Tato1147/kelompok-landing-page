// routes/auth.js

const router = require('express').Router();
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); //package for creating tokens
const User = require('../models/User'); 

// @route   POST /api/register
// @desc    register a new user
// @access  public
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists.' });
        }

        user = new User({ username, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        await user.save();

        res.status(201).json({ msg: 'User registered successfully!' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during registration.');
    }
});

// @route   POST /api/login
// @desc    authenticate user & get token
// @access  public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            //use a vague error message for security (don't reveal if the email exists or not)
            return res.status(400).json({ msg: 'Invalid Credentials.' });
        }

        //compare the submitted password with the stored HASH
        // bcrypt.compare() handles the comparison securely
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials.' });
        }

        //create the payload for the JWT
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };
        
        //sign (Create) the JWT
        jwt.sign(
            payload,
            process.env.JWT_SECRET, //your secret key from the .env file
            { expiresIn: '1h' }, //token expires in 1 hour
            (err, token) => {
                if (err) throw err;
                //send the JWT back to the frontend
                res.json({ token }); 
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during login.');
    }
});

module.exports = router;