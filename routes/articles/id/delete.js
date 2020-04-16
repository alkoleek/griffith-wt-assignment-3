/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const BlogArticle = require('../../../models/article');

// Function to delete an article
function fdelete(req, res) {

    // try to delete the article
    BlogArticle.deleteOne({_id: req.params.id}, {}, (err) => {

        // If error return 400 with error
        if (err) {
            res.status(400).send(err);
        }

        // If success return 204
        res.status(204).send();
    });
}

module.exports = fdelete;

