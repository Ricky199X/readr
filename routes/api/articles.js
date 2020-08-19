const express = require('express')
const router = express.Router()

const Article = require('../../models/Article')

//  ------ Routes -------
// @route GET /articles -> gets all articles in the database

router.get('/', async (req, res) => {
    try {
        const articles = await Article.find()
        res.send(articles)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route GET /articles/:id -> gets one article in the database
router.get('/:id', getArticle, (req, res) => {
    res.send(res.article)
})

// @route POST /articles -> adds new instance of an article to the database
router.post('/', async (req, res) => {
    console.log(req.body)
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        comments: req.body.comments,
        source: req.body.source
    })

    try {
        const newArticle = await article.save()
        res.status(201).json(newArticle)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


// Middleware Function - get an article in database by ID
async function getArticle(req, res, next) {
    let article
    try {
        article = await Article.findById(req.params.id)
        if (article == null) {
            return res.status(404).json({ message: 'Cannot find that article!' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.article = article
    next()
}


module.exports = router