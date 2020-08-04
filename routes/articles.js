const express = require('express')
const router = express.Router()

const Article = require('../models/Article')
const { response } = require('express')

// console.log(new Article({
//     title: "pixel 5 !",
//     author: "Ricky Rojas",
//     source: "android central",
//     comments: 10
// }))

//  ------ Routes -------
// @route GET /articles -> gets all articles in the database

router.get('/', (req, response) => {
    Article.find()
        .then(articles => response.send(articles))
})


module.exports = router