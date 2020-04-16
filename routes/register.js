/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const User = require('../models/user');

function register(req, res) {
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

    const user = new User();
    user.email = email;
    user.password = password;

    user.save({}, (err) => {
        //In case of error, send back the error to the client
        if (err) {
            res.status(400).send(err);
            return;
        }

        //Send back the result to client
        res.status(200).json(user.toJSON())
    });
}

module.exports = register;
