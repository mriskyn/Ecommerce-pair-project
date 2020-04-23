const express = require('express')
const HomeController = require('../controllers/homeController')
const customerRouter = require('./customer')
const cartRouter = require('./cart')
const chatRouter = require('./chat')
const adminRouter = require('./admin')


const router = express.Router()

function checkUser(req, res, next){
    req.session.token = false
    console.log(req.session)
    if(req.body.username === '' || req.body.password === ''){
        res.render('error', {error: 'Username / Password tidak boleh kosong'})
    } else {
        req.session.token = true
        next()
    }
}

function checkIn(req, res, next){
    if(req.session.token){
        next()
    } else {
        res.render('home', {error: 'Harus Login!'})
    }
}

function checkOut(req, res, next){
    req.session.token = false
    next()
}

router.use('/login/admin', adminRouter)
router.get('/login', HomeController.getLogin)
router.post('/login', checkUser, HomeController.postLogin)
router.get('/logout', checkOut, HomeController.logout)
router.get('/register', HomeController.getRegister)
router.post('/register', HomeController.postRegister)

router.use(checkIn)
router.get('/', HomeController.getHome)
router.use('/customers', customerRouter)
router.use('/carts', cartRouter)
router.use('/chat', chatRouter)


router.get('/*', HomeController.notFound)

module.exports = router