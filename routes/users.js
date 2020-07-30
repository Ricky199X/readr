const express = require('express')
const router = express.Router()

// Routes 
// @route GET /users -> gets all users in the database

router.get('/', (req, response) => {
    response.send('Users')
})


module.exports = router