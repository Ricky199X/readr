// const { get } = require('config');
const fetch = require('node-fetch')
// News API
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('63c967f7cbd84c11b263b4e4758f1693')

class EntertainmentArticles {
    constructor() {
        this.articles = []
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



// const promise = fetch()
//     .then(response => response.json())
//     .then(json => json)
//     .catch(error => console.message(error))

// const fetchEntertainmentHeadlines = async () => {

//     try {
//         const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=63c967f7cbd84c11b263b4e4758f1693');
//         const data = await res.json();

//         console.log(`Found ${data.totalResults} articles`);

//         const entertainment = new EntertainmentArticles()
//         entertainment.articles = data.articles
//         console.log(entertainment)

//     } catch (error) {
//         console.log(`Bad API call!`)
//     }
// };

// console.log(data)


// GET technology top headlines 
newsapi.v2.topHeadlines({
    category: 'technology',
    country: 'us'
}).then(response => {
    TechnologyArticles.articles = response
    // console.log(TechnologyArticles.articles)
}).catch(error =>
    console.error(error.message)
)

// GET sports top headlines 
newsapi.v2.topHeadlines({
    category: 'sports',
    country: 'us'
}).then(response => {
    SportsArticles.articles = response
}).catch(error =>
    console.error(error.message)
)

module.exports = { EntertainmentArticles }
// , fetchEntertainmentHeadlines
