// Create and export an express.Router()
const app = require('express').Router()
const db = require('../models')

//index route
app.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
    })
})

//post route
app.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
// show route
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

module.exports = app


// //Create the index route in places.js 
// // GET /places
// app.get('/', (req, res) => {
//     res.render('places/index', { places })
// })

// GET /places/new route
app.get('/new', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/new', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
// show route
// app.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//     res.render('error404')
// }
// else if (!places[id]) {
//     res.render('error404')
// }
// else {
//     res.render('places/show', { place: places[id], id })
// }
// })
// // POST /places route
// app.post('/', (req, res) => {
//     if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//         req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//         req.body.state = 'USA'
//         }
//         places.push(req.body)
//         res.redirect('/places')
// })

// //edit route
// app.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         let data = {
//             place: places[id],
//             id: id
//         }
//         res.render('places/edit', data)
//     }
// })
// // put route //update
// app.put('/:id', (req, res) => {
//     //console.log("PUT endpoint hit")
//     let id = Number(req.params.id)
//     //console.log("PUT ID - ", id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }

//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${req.params.id}`)
// }
// })

// app.delete('/:id', (req, res) => {
// let id = Number(req.params.id)
// if (isNaN(id)) {
//     res.render('error404')
// }
// else if (!places[id]) {
//     res.render('error404')
// }
// else {
//     places.splice(id, 1)
//     res.redirect('/places')
// }
// })

