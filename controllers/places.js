// Create and export an express.Router()
const app = require('express').Router()

//Create the index route in places.js 
// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
    
            res.render('places/index', { places })
})

// GET /places/new route
app.get('/new', (req, res) => {
    res.render('places/new')
})

// POST /places route
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = app