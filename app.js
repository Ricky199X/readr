const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Instantiate Morgan - this logs requests to the terminal (similar to rails)
const morgan = require('morgan')

// Load config.env file
dotenv.config({ path: './config/config.env' })

// initialize app with express 
const app = express()


// run Connect DB to connect to your host 
connectDB()

// if environment = development, run request logs
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// We may deploy to heroku - so we need to set the env variable 
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))


// Routes
app.use(express.json())

const articlesRouter = require('./routes/articles')
const usersRouter = require('./routes/users')
const sitessRouter = require('./routes/sites')

app.use('/sites', sitessRouter)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)



