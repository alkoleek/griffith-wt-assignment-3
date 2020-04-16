/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const User = require('../models/user');
const BlogArticle = require('../models/article');

function deleteEverythingInDatabase(req, res) {
    BlogArticle.deleteMany({}, {}, (err) => {
        if (err) {
            res.status(500).send();
        }
    });

    User.deleteMany({}, {}, (err) => {
        if (err) {
            res.status(500).send();
        }
        res.status(204).send();
    });
}

module.exports = deleteEverythingInDatabase;
