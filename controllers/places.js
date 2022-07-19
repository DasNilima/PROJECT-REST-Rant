// Create and export an express.Router()
const app = require('express').Router()
const db = require('../models')

//INDEX
app.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//CREATE 
app.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            res.render('places/new', { message })
        }
        else {
            res.render('error404')
        }
    })
})

//NEW
app.get('/new', (req, res) => {
    res.render('places/new')
})
// SHOW
app.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


app.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
    })

app.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
    })

app.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
    })


app.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = app
