const mongoose = require('mongoose')
const Schema = mongoose.Schema

// each favorite makes reference to a user 

const FavoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    favorites: {
        type: Array,
        'default': []
    }
})

module.exports = mongoose.model('favorite', FavoriteSchema)