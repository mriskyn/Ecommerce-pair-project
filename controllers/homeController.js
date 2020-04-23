const { Customer } = require('../models')

class HomeController {

  static getHome(req, res) {
    res.render('home')
  }

  static getLogin(req, res) {
    res.render('login')
  }

  static postLogin(req, res) {
    Customer.findAll({})
    .then(data => {
      data.map(el => {
        if(el.username === req.body.username && el.password === req.body.password){
          res.redirect('/')
        }
      })
      res.render('error', {error: 'Username / password salah!'})
    })
    .catch(error => {
      res.render('error', {error: 'Username / password salah!'})
    })
  }

  static getRegister(req, res) {
    res.render('register')
  }

  static postRegister(req, res) {
    Customer.create(req.body)
      .then(() => {
        res.redirect('/login')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static notFound(req, res) {
    res.render('error', { error: `404 - Page not found!` })
  }
}

module.exports = HomeController