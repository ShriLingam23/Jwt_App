const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.set('PORT', process.env.PORT || 5000)

app.use(bodyParser.urlencoded({extended: true}))
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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)