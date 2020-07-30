const express = require('express')
const router = express.Router()

// Routes 
// @route GET /articles -> gets all users in the database

router.get('/', (req, response) => {
    response.send('Articles')
})


module.exports = router