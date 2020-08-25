// middleware function for user auth
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (res, req, next) {

    // get token from the header of the request - token is available in req's header key
    const token = req.header('x-auth-token')

    // check if no token 
    if (!token) {
        return res.status(401).json({ message: `No token, authorization denied` })
    }

    // Verify token if there is one - take req object and assign value to user
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
    } catch (err) {

    }
}