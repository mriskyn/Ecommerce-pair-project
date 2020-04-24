const express = require('express')
const router = express.Router()
const Controller = require('../controllers/adminController')

router.get('/', Controller.datas)
router.get('/add', Controller.getAdd)
router.post('/add', Controller.postAdd)

module.exports = router