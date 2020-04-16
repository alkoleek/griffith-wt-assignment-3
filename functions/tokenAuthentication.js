/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

// Require the module for JWT
const jwt = require('jsonwebtoken');

// Require the TOKEN_SECRET to sign the JWT
const {TOKEN_SECRET} = require('../config');

// Function to use in middleware on express to enforce authentication on express
function tokenAuthentication(req, res, next) {
    // Retrieve the Authorization header
    const authHeader = req.headers['authorization'];

    // Split the "Bearer" part
    const token = authHeader && authHeader.split(' ')[1];

    // If no token part, 401 error
    if (token == null)
        return (res.sendStatus(401));

    // If token found, verify it
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        // If verification failed return 403
        if (err)
            return res.sendStatus(403);
        req.user = user;

        //Otherwise continue with the user set on the request
        next();
    });
}

module.exports = tokenAuthentication;
