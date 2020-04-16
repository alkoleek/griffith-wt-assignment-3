/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const BlogArticle = require('../../models/article');

function post(req, res) {
    //Creating the new article
    const article = new BlogArticle();

    //Retrieve title parameter
    const title = req.body.title;

    //Check parameter
    if (!title || typeof title !== 'string') {
        res.status(400).send('Missing title');
        return;
    }

    //Retrieve category parameter
    const category = req.body.category;

    //Check parameter
    if (!category || typeof category !== 'string') {
        res.status(400).send('Missing category');
        return;
    }

    //Retrieve description parameter
    const description = req.body.description;

    //Check parameter
    if (!description || typeof description !== 'string') {
        res.status(400).send('Missing description');
        return;
    }

    //Retrieve content parameter
    const content = req.body.content;

    //Check parameter
    if (!content || typeof content !== 'string') {
        res.status(400).send('Missing content');
        return;
    }

    //Retrieve author parameter
    const author = req.body.author;

    //Check parameter
    if (!author || typeof author !== 'string') {
        res.status(400).send('Missing author');
        return;
    }

    //Filling the article
    article.title = title;
    article.category = category;
    article.description = description;
    article.content = content;
    article.author = author;

    //Save the article
    article.save({}, (err) => {
        //In case of error, send back the error to the client
        if (err) {
            res.status(400).send(err);
        }

        //Send back the result to client
        res.status(201).json(article.toJSON())
    });
}

module.exports = post;
