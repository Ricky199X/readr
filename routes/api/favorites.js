const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Favorite = require('../../models/Favorite')
const User = require('../../models/User')

// GET all favorites for the current user
// Private
router.get('/', auth, async (req, res) => {
    try {

        // want to see who the current user is via their JWT 
        // if JWT matches that of current user, respond with their favorites 

        const favorites = await Favorite.find()

        if (!favorites) {
            return res.status(400).json({ msg: `Cannot find favorites!` })
        }

        res.send(favorites)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ message: err.message })
    }
})

module.exports = router