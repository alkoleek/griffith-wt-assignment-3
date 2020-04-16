/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const BlogArticle = require('../../models/article');

function get(req, res) {
    // Find all articles
    BlogArticle.find((err, articles) => {

        // If error send 400 with error
        if (err) {
            res.status(400).send(err);
        }

        // Else send all articles with 200 status code
        res.status(200).json(articles);
    });
}

module.exports = get;
