/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {BCRYPT_SALT_LENGTH} = require('../config');

//User Schema for mongodb
const userSchema = mongoose.Schema({
    email: {type: String, unique: true},
    password: String
}, {timestamps: true});

// Function to encrypt the user password before saving it
userSchema.pre('save', async function (next) {
    const user = this;

    // If password untouched return directly
    if (!user.isModified('password')) {
        return (next());
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(user.password, BCRYPT_SALT_LENGTH);

    // And update the good in database
    user.password = hashedPassword;
    next();
});

// Add method to login
userSchema.methods.comparePassword = function (password, next) {

    //Compare password with encrypted one
    bcrypt.compare(password, this.password, (err, isMatch) => {

        // If err, propagate it
        if (err) return next(err);

        // Else password matched
        next(null, isMatch);
    })
};

// Export the model to reuse it
module.exports = mongoose.model('User', userSchema);
