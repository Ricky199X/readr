const express = require('express')
const router = express.Router()

// Require the User Model
const User = require('../../models/User')

// Routes 
// @route GET api/users -> gets all users in the database

// When we make call to the database, we receive JSON including all user information back
router.get('/', (req, response) => {
    User.find()
        .then(users => response.json(users))
})



module.exports = router