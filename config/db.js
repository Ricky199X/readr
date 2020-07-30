// Bring in Mongoose 
const mongoose = require('mongoose')

// connect to Mongo DB using mongoose
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })

        console.log(`Mongo DB connected: ${connection.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}


module.exports = connectDB