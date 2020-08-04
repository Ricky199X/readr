const express = require('express')
const router = express.Router()

const Article = require('../models/Article')

//  ------ Routes -------
// @route GET /articles -> gets all articles in the database

router.get('/', async (req, res) => {
    try {
        const articles = await Article.find()
        res.json()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route GET /articles/:id -> gets one article in the database
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// @route POST /articles -> adds new instance of an article to the database
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        source: req.body.source,
        comments: req.body.comments
    })

    try {
        const newArticle = await article.save()
        res.status(201).json(newArticle)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router