const router = require('express').Router()

//Make the first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

