/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const BlogArticle = require('../../../models/article');

// Function to get an article by id
function get(req, res) {
    // Retrieve the article with it's id
    BlogArticle.findById(req.params.id, {}, {}, (err, article) => {

        // If not found send 404
        if (err || !article) {
            res.status(404).send(err);
            return;
        }

        //If found send 200 with article
        res.status(200).json(article);
    });
}

module.exports = get;
