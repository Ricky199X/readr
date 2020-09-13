// News API
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('63c967f7cbd84c11b263b4e4758f1693')


// GET all entertainment articles 
newsapi.v2.topHeadlines({
    category: 'entertainment',
    country: 'us'
}).then(async response => {
    const entertainmentArticles = response
    console.log(entertainmentArticles)
    return entertainmentArticles
}).catch(error =>
    console.error(error.message)
)

// GET technology top headlines 
newsapi.v2.topHeadlines({
    category: 'technology',
    country: 'us'
}).then(response => {
    const techArticles = response
    return techArticles
}).catch(error =>
    console.error(error.message)
)

// GET sports top headlines 
newsapi.v2.topHeadlines({
    category: 'sports',
    country: 'us'
}).then(response => {
    const sportsArticles = response
    return sportsArticles
}).catch(error =>
    console.error(error.message)
)


module.exports = 'scraper'