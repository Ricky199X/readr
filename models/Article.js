const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema - this is an object literal
// each article has an author, a title, number of comments, and a source (the foreign key)

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    datePublished: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
})

// need to export the model so that the database can have access to it 
module.exports = mongoose.model('article', ArticleSchema)