require('dotenv').config()
const express = require('express')
const app = express()

//import the router that created in places.js
app.use('/places', require('./controllers/places'))

// Create the home page route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Create the Wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
