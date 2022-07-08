// Get the environment variables
require('dotenv').config()
//Require needed node modules
const express = require('express')
//Initialized the app object
const app = express()

//import the router that created in places.js
app.use('/places', require('./controllers/places'))

// Create a homepage route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Create a Wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// listen to a port number defined by a local environment variable
app.listen(process.env.PORT)
