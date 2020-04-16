/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

//Registering all our modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tokenAuthentication = require('./functions/tokenAuthentication');

//Retrieve the env variables from Docker-compose
const {DATABASE_URI, EXTERNAL_PORT} = require('./config');

//Create a connection to the database
const db = mongoose.connection;

//Connect the database using URI from env
mongoose.connect(DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//Listen for error event
db.on('error', () => {
    console.error('Error while connecting to the database');
});

//Listen for success event
db.once('open', () => {
    console.log('Successfully connected to database');
});

//Creating our express app
const app = express();

//Enable CORS
const cors = require('cors');
app.use(cors());

//Serve the front-end
app.use(express.static('www'));

//Use a JSON parser
app.use(bodyParser.json());

//Defining our CRUD routes for our BlogArticle
app.route('/articles')

    //Get route, to retrieve articles
    .get(require('./routes/articles/get'))

    //Post route, to add new articles
    .post(tokenAuthentication, require('./routes/articles/post'));

//Route to modify an article
app.route('/articles/:id')

    //Get route to retrieve one article
    .get(require('./routes/articles/id/get'))

    //Put route to edit one article
    .put(tokenAuthentication, require('./routes/articles/id/put'))

    //Delete route to delete one article
    .delete(tokenAuthentication, require('./routes/articles/id/delete'));

//Route to delete everything
app.route('/deleteEverythingInDatabase').get(tokenAuthentication, require('./routes/deleteEverythingInDatabase'));

//Route to login the user
app.route('/login').post(require('./routes/login'));

//Route to register
app.route('/register').post(require('./routes/register'));

//Creating the server, bind on EXTERNAL_PORT on the host machine
app.listen(1337, () => {
    console.log(`Server listening on port ${EXTERNAL_PORT}`);
});
