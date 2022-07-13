// Create and export an express.Router()
const app = require('express').Router()
const places = require('../models/places.js')

//Create the index route in places.js 
// GET /places
app.get('/', (req, res) => {
    res.render('places/index', { places })
})

// GET /places/new route
app.get('/new', (req, res) => {
    res.render('places/new')
})

// POST /places route
app.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
        req.body.city = 'Anytown'
        }
        if (!req.body.state) {
        req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
    })

// show route
app.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
    res.render('error404')
}
else if (!places[id]) {
    res.render('error404')
}
else {
    res.render('places/show', { place: places[id], id })
}
})

// delete route
app.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
    res.render('error404')
}
    else if (!places[id]) {
    res.render('error404')
}
    else {
    places.splice(id, 1)
    res.redirect('/places')
}
    })


module.exports = app