const express = require('express')
const router = express.Router()

// Site model
const Site = require('../../models/Site')


//  ------ Routes -------
// @route GET /sites -> gets all sites in the database

router.get('/', async (req, res) => {
    try {
        const sites = await Site.find()
        res.send(sites)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route POST /sites -> adds new site
// Public
router.post('/', async (req, res) => {

    const site = new Site({
        name: req.body.name,
        url: req.body.url
    })

    console.log(req.body)
    try {
        const newSite = await site.save()
        res.status(201).json(newSite)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// @route GET /sites/:id -> gets one site in the database
// Public
router.get('/:id', async (req, res) => {
    try {
        const site = await Site.findById(req.params.id)
        res.json(site)
    } catch (err) {
        console.error(err.message)

        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: `Site not found` })
        }

        res.status(500).send(`Server Err`)
    }
})


module.exports = router