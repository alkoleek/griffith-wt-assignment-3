/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const DATABASE_HOST = 'localhost';
const DATABASE_PORT = 27017;
const DATABASE_NAME = 's3008951';
const DATABASE_URI = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
const TOKEN_SECRET = 'WbGnKPBWGjpBrjHhv46TVdBap4xzp9ME9xtv9JJjc7CvLqXfG4uQ7b4hf9kRJacH';
const BCRYPT_SALT_LENGTH = 12;
const EXTERNAL_PORT = 1337;

module.exports = {
    // Host for the database
    DATABASE_HOST,

    // Port for the database
    DATABASE_PORT,

    // Name of the database
    DATABASE_NAME,

    // URL to connect to the database
    DATABASE_URI,

    // Token to encrypt
    TOKEN_SECRET,

    // To encrypt passwords
    BCRYPT_SALT_LENGTH,

    // Port of the server
    EXTERNAL_PORT
}
