const express = require('express')
const HomeController = require('../controllers/homeController')

const router = express.Router()

router.get('/', HomeController.getHome)


router.get('/*', HomeController.notFound)

module.exports = router