const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema - this is an object literal
// each site just has a name and many articles

const SiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})



// need to export the model so that the database can have access to it 
module.exports = mongoose.model('site', SiteSchema)

