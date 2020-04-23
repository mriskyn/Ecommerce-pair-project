const express = require('express')
const Controller = require('../controllers/cartController')

const router = express.Router()

router.get('/', Controller.readCart)
router.get('/remove/:id', Controller.remove_item)
router.post('/checkout', Controller.checkout)


module.exports = router