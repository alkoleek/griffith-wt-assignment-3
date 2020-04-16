/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const BlogArticle = require('../../../models/article');

function put(req, res) {
    BlogArticle.findById(req.params.id, {}, {}, (err, article) => {
        if (err || !article) {
            res.status(404).send(err);
            return;
        }

        //Retrieve title parameter
        const title = req.body.title;

        //Check parameter
        if (title && typeof title === 'string') {
            article.title = title;
        }

        //Retrieve category parameter
        const category = req.body.category;

        //Check parameter
        if (category && typeof category === 'string') {
            article.category = category;
        }

        //Retrieve description parameter
        const description = req.body.description;

        //Check parameter
        if (description && typeof description === 'string') {
            article.description = description;
        }

        //Retrieve content parameter
        const content = req.body.content;

        //Check parameter
        if (content && typeof content === 'string') {
            article.content = content;
        }

        //Retrieve author parameter
        const author = req.body.author;

        //Check parameter
        if (author && typeof author === 'string') {
            article.author = author;
        }

        //Save the article
        article.save({}, (err) => {
            //In case of error, send back the error to the client
            if (err) {
                res.status(400).send(err);
            }

            //Send back the result to client
            res.status(200).json(article.toJSON())
        });
    });
}

module.exports = put;
