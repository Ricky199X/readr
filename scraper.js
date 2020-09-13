// News API
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('63c967f7cbd84c11b263b4e4758f1693')

class EntertainmentArticles {
    constructor() {
        this.articles = {};
    }
}

class SportsArticles {
    constructor() {
        this.articles = {};
    }
}

class TechnologyArticles {
    constructor() {
        this.articles = {};
    }
}

// GET all entertainment articles 
newsapi.v2.topHeadlines({
    category: 'entertainment',
    country: 'us'
}).then(async response => {
    EntertainmentArticles.articles = response
}).catch(error =>
    console.error(error.message)
)

// GET technology top headlines 
newsapi.v2.topHeadlines({
    category: 'technology',
    country: 'us'
}).then(response => {
    TechnologyArticles.articles = response
}).catch(error =>
    console.error(error.message)
)

// GET sports top headlines 
newsapi.v2.topHeadlines({
    category: 'sports',
    country: 'us'
}).then(response => {
    SportsArticles.articles = response
    console.log(SportsArticles.articles)
}).catch(error =>
    console.error(error.message)
)


module.exports = 'scraper'