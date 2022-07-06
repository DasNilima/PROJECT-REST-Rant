// Create and export an express.Router()
const router = require('express').Router()

//Create the first route in places.js 
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router