const express = require('express')
const Controller = require('../controllers/chatController')

const router = express.Router()

router.get('/', Controller.page)

module.exports = router