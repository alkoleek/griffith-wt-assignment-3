/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

// Require the module for JWT
const jwt = require('jsonwebtoken');

// Retrieve the env variables from Docker-compose
const {TOKEN_SECRET} = require('../config');

// Function to generate a JWT
function generateAccessToken(object) {

    //Expire the token in 1 year
    return (jwt.sign(object, TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '1y'}));
}

module.exports = generateAccessToken;
