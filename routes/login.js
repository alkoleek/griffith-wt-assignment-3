/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const User = require('../models/user');
const generateAccessToken = require('../functions/generateAccessToken');

function login(req, res) {
    //Retrieve title parameter
    const email = req.body.email;

    //Check parameter
    if (!email || typeof email !== 'string') {
        res.status(400).send('Missing email');
        return;
    }

    //Retrieve title parameter
    const password = req.body.password;

    //Check parameter
    if (!password || typeof password !== 'string') {
        res.status(400).send('Missing password');
        return;
    }

    User.findOne({email: email}, {}, {}, (err, user) => {
        if (err || !user) {
            res.status(404).send(err);
            return;
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err || !isMatch) {
                res.status(400).send('Wrong password');
                return;
            }

            const userToken = {};
            userToken.email = user.email;
            userToken.password = user.password;
            userToken.id = user._id;

            return res.status(200).json({token: generateAccessToken(userToken)});
        });
    });
}

module.exports = login;
