const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Load config.env file
dotenv.config({ path: './config/config.env' })

// initialize app with express 
const app = express()

// We may deploy to heroku - so we need to set the env variable 
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))







// Initialize the users routes - any request to api/users will go to the users.js file
// const users = require('./routes/api/users')
// const articles = require('./routes/api/articles')
// const sites = require('./routes/api/sites')




// // bodyparser - now included with express
// app.use(express.json())

// // initialize cors
// app.use(cors())

// // Mongo DB Config
// const db = require('./config/keys').mongoURI

// // connect to Mongo using mongoose
// mongoose
//     .connect(db)
//     .then(() => console.log('mongo db connected'))
//     .catch(error => console.log(error))




// // Use Routes
// app.use('./api/users', users)
// // app.use('./api/articles', articles)
// // app.use('./api/sites', sites)

