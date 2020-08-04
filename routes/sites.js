const express = require('express')
const router = express.Router()

// User model
const Site = require('../models/Site')
const { response } = require('express')

// console.log(new Site({ name: "www.reddit.com" }))

//  ------ Routes -------
// @route GET /sites -> gets all users in the database

router.get('/', (req, response) => {
    Site.find()
        .then(sites => response.json(sites))

})


module.exports = router