const express = require('express')
const router = express.Router()

// User model
const User = require('../models/User')
const { response } = require('express')

// console.log(new User({ userName: "ricky", password: "test" }))
// console.log(new User({ userName: "another user", password: "another test" }))

// ----- Routes -----
// @route GET /users -> gets all users in the database
router.get('/', (req, response) => {
    User.find()
        .then(users => response.json(users))

})

// @route POST /users -> create a new user and add to the database
router.post('/', (req, response) => {
    // console.log(req)
    // create a new user object - pass thru the required params
    const newUser = new User({
        userName: req.body.userName,
        password: req.body.password
    })

    console.log(newUser)
    // save the new user in memory - save to DB - then give us back the user
    newUser.save().then(user => response.json(user))
})


module.exports = router