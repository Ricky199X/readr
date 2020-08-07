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
    comments: {
        type: Number,
        required: true
    },
    source: [{ type: Schema.Types.ObjectId, ref: 'site' }]
})

// need to export the model so that the database can have access to it 
module.exports = mongoose.model('article', ArticleSchema)