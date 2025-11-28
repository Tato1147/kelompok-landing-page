// middleware/auth.js

const jwt = require('jsonwebtoken');

//checks for a token and verifies it
module.exports = function (req, res, next) {
    //get token from header (Frontend will send it in 'x-auth-token')
    const token = req.header('x-auth-token');

    //check if the token exists
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        //verify token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attach the decoded user payload to the request object (req.user now has user id and role)
        req.user = decoded.user;
        
        //proceed to the next route handler
        next();

    } catch (err) {
        //token is invalid (expired, wrong signature, etc.)
        res.status(401).json({ msg: 'Token is not valid' });
    }
};