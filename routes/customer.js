const express = require('express')
const Controller = require('../controllers/customerController')

const router = express.Router()

router.get('/', Controller.read)
// router.get('/addItems/:id', Controller.add_get)



module.exports = router