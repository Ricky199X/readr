const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// User model
const User = require('../../models/User')


// ----- Routes -----
// @route GET /users -> gets all users in the database
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// // @route GET /users/:id -> gets one user in the database
// router.get('/:id', getUser, (req, res) => {
//     res.send(res.user)
// })


// @route POST /users -> adds new instance of a user to the database
router.post('/', [
    check('name', 'name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
        .isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body

        try {
            // See if user exists, if the user exists - we send back an error 
            let user = await User.findOne({ email })

            if (user) {
                return res.status(400).json({ errors: [{ msg: "user already exists" }] })
            }

            user = new User({
                name,
                email,
                password
            })

            // encrypt the password using bcrypt + save the user
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            // return the JSON Web Token - in order to log the user in right away, we need their web token
            const payload = {
                user: {
                    id: user.id
                }
            }

            // sign the token, pass in payload, pass in secret + expiration
            // inside callback we'll get an error or token - if we get token we send it back to client
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 3600000 },
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                }
            )


        } catch (err) {
            console.log(err.message)
            res.status(500).send('server error')
        }
    })





module.exports = router