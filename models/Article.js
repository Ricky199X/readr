const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema - this is an object literal
// each article has an author, a title, a source, and a comments

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
})

// need to export the model so that the database can have access to it 
module.exports = Article = mongoose.model('article', ArticleSchema)