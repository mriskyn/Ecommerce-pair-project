const express = require('express')
const Controller = require('../controllers/customerController')

const router = express.Router()

router.get('/', Controller.read)
router.get('/add/:id', Controller.add_item)
router.get('/remove/:id', Controller.remove_item)




module.exports = router