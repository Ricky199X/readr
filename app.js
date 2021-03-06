const express = require('express')
const connectDB = require('./config/db')
const app = express()
const scraper = require('./scraper')

// connect database
connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.get('/', (req, res) => res.send('API Running'))

//Init Middleware
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/articles', require('./routes/api/articles'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/favorites', require('./routes/api/favorites'))



