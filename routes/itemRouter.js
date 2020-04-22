const express = require('express')
const Controller = require('../controllers/itemController')

const router = express.Router()

router.get('/', Controller.read)
router.get('/add', Controller.add_get)
router.post('/add', Controller.add_post)
router.get('/delete/:id', Controller.delete)
router.get('/edit/:id', Controller.edit_get)
router.post('/edit/:id', Controller.edit_post)

module.exports = router