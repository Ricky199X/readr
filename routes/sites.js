const express = require('express')
const router = express.Router()

// Routes 
// @route GET /sites -> gets all users in the database

router.get('/', (req, response) => {
    response.send('Sites')
})


module.exports = router