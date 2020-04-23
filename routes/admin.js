const express = require('express')
const router = express.Router()
const Controller = require('../controllers/adminController')

router.get('/', Controller.datas)

module.exports = router