const express = require('express')
const router = express.Router()

// User model
const User = require('../models/User')


// ----- Routes -----
// @route GET /users -> gets all users in the database
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route GET /users/:id -> gets one user in the database
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})


// @route POST /users -> adds new instance of a user to the database
router.post('/', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        password: req.body.password
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router