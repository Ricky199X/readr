const express = require('express')
const router = express.Router()
const Article = require('../../models/Article')
const fetch = require('node-fetch')
// const { fetchEntertainmentHeadlines } = require('../../scraper')

// fetchEntertainmentHeadlines()



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
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=63c967f7cbd84c11b263b4e4758f1693');
        const data = await res.json();

        // need to mapp thru the data, make every article with the parameters defined for an article=
        data.articles.forEach(article => {
            const storyData = {
                title: article.title,
                author: article.author,
                description: article.description,
                url: article.url,
                datePublished: article.publishedAt,
                source: article.source.name
            }
            console.log(storyData)
            // new Article(storyData)
            //     .save()
            // const newArticle = story.save()
            // res.send(newArticle)
            // res.status(201).json(newArticle)
        })
    } catch (err) {
        console.error(err.message)
        res.status(400).json({ message: err.message })
    }
})

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