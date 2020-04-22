const express = require('express')
const HomeController = require('../controllers/homeController')
const itemRouter = require('./itemRouter')
const customerRouter = require('./customer')

const router = express.Router()

router.get('/', HomeController.getHome)
router.use('/items', itemRouter)
router.use('/customers', customerRouter)


router.get('/*', HomeController.notFound)

module.exports = router