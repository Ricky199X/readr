const express = require('express')
const router = express.Router()

// User model
const Site = require('../models/Site')


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

// @route GET /sites/:id -> gets one site in the database
router.get('/:id', getSite, (req, res) => {
    res.send(res.site)
})

// @route GET /sites/:id/articles -> gets all articles of a specific site
router.get('/:id/articles', async (req, res) => {
    console.log(req.params)
    let site
    let siteArticles
    try {
        site = await Site.findOne({ _id: req.params.id })
        siteArticles = site.articles
        res.send(siteArticles)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// @route POST /users -> adds new instance of a user to the database
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

// Middleware Function - get a site in database by ID
async function getSite(req, res, next) {
    let site
    try {
        site = await Site.findById(req.params.id)
        if (site == null) {
            return res.status(404).json({ message: 'Cannot find that site!' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.site = site
    next()
}


module.exports = router