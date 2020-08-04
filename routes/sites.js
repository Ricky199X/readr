const express = require('express')
const router = express.Router()

// User model
const Site = require('../models/Site')


//  ------ Routes -------
// @route GET /sites -> gets all sites in the database

router.get('/', async (req, res) => {
    try {
        const sites = await Site.find()
        res.json()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route GET /sites/:id -> gets one site in the database
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})


// @route POST /users -> adds new instance of a user to the database
router.post('/', async (req, res) => {
    const site = new Site({
        name: req.body.name
    })

    try {
        const newSite = await site.save()
        res.status(201).json(newSite)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router