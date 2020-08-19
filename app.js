const express = require('express')
const connectDB = require('./config/db')
const app = express()

// connect database
connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.get('/', (req, res) => res.send('API Running'))

//Init Middleware
app.use(express.json({ extended: false }))

const articlesRouter = require('./routes/articles')
const usersRouter = require('./routes/users')
const sitesRouter = require('./routes/sites')

app.use('/sites', sitesRouter)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)



