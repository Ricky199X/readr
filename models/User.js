const mongoose = require('mongoose')
const Schema = mongoose.Schema
// create schema - this is an object literal
// each user has a username and password 

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// need to export the model so that the database can have access to it 
module.exports = mongoose.model('user', UserSchema)
