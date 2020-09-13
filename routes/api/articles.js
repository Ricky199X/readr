const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// // News API
// const NewsAPI = require('newsapi')
// const newsapi = new NewsAPI('63c967f7cbd84c11b263b4e4758f1693')

const Article = require('../../models/Article')

//  ------ Routes -------
// @route GET /articles -> gets all articles in the database

// router.get('/', async (req, res) => {
//     try {
//         const articles = await Article.find()
//         res.send(articles)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// @route POST /articles -> adds new instance of an article to the database
// router.post('/', async (req, res) => {
//     console.log(req.body)
//     const article = new Article({
//         title: req.body.title,
//         author: req.body.author,
//         description: req.body.description,
//         url: req.body.url,
//         datePublished: req.body.datePublished,
//         source: req.body.source,
//         comments: req.body.comments
//     })

//     try {
//         const newArticle = await article.save()
//         res.status(201).json(newArticle)
//     } catch (err) {
//         console.error(err.message)
//         res.status(400).json({ message: err.message })
//     }
// })

// // @route GET /articles/:id -> gets one article in the database
// router.get('/:id', async (req, res) => {
//     try {
//         const article = await Article.findById(req.params.id)
//         res.json(article)
//     } catch (err) {
//         console.error(err.message)

//         if (err.kind == 'ObjectId') {
//             return res.status(400).json({ msg: `Article not found` })
//         }

//         res.status(500).send(`Server Err`)
//     }
// })


module.exports = router