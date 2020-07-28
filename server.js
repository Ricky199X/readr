const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// Initialize the users routes - any request to api/users will go to the users.js file
const users = require('./routes/api/users')
const articles = require('./routes/api/articles')
const sites = require('./routes/api/sites')


// initialize express 
const app = express()

// bodyparser - now included with express
app.use(express.json())

// Mongo DB Config
const db = require('./config/keys').mongoURI

// connect to Mongo using mongoose
mongoose
    .connect(db)
    .then(() => console.log('mongo db connected'))
    .catch(error => console.log(error))


// We may deploy to heroku - so we need to set the env variable 
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))

// Use Routes
app.use('./api/users', users)
// app.use('./api/articles', articles)
// app.use('./api/sites', sites)

