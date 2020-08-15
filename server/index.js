const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const db = require('./db')
const { adminRouterProtected, adminRouterUnprotected } = require('./route')

// protecting our router with the middleware
const validateToken = require('./middleware/validate_token')

app.set('PORT', process.env.PORT || 5000)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
    cors({
        // we tell to cors what we accept as a valid header
        allowedHeaders: ['sessionId', 'Content-Type', 'master-token'],
        exposedHeaders: ['sessionId'],
        // we say the methods that we accept
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    }),
)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', adminRouterUnprotected)
app.use('/api', validateToken, adminRouterProtected)

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)