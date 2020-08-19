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

const articlesRouter = require('./routes/api/articles')
const usersRouter = require('./routes/api/users')
const sitesRouter = require('./routes/api/sites')

app.use('/api/sites', sitesRouter)
app.use('/api/users', usersRouter)
app.use('/api/articles', articlesRouter)



