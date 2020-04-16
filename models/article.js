/**
 * @student number: 3008951
 * @student name: Maxime DROUIN
 * @date: 04/04/20
 */

const mongoose = require('mongoose');

// Describe our article object schema
const articleSchema = mongoose.Schema({
    title: String,
    category: String,
    description: String,
    content: String,
    author: String
}, {timestamps: true});

// Export the model
module.exports = mongoose.model('BlogArticle', articleSchema);
