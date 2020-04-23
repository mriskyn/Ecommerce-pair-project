const { Customer, Admin } = require('../models')

class HomeController {

  static getHome(req, res) {
    let error = ''
    res.render('home', { error })
  }

  static getLogin(req, res) {
    res.render('login')
  }

  static postLogin(req, res) {
    Customer.findAll({})
      .then(data => {
        data.map(el => {
          if (el.username === req.body.username && el.password === req.body.password) {
            req.session.userId = el.id
            res.redirect('/')
          }
        })
        return Admin.findAll({})
      })
      .then(data => {
        let check = false
        data.map(el => {
          if (el.username === req.body.username && el.password === req.body.password) {
            check = true
            req.session.userId = el.id
            res.redirect('/login/admin')
          }
        })

        if(!check){
          res.render('error', { error: 'Username / password salah!' })
        }
      })
      .catch(error => {
        res.render('error', { error })
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

  static logout(req, res) {
    res.redirect('/login')
  }

  static notFound(req, res) {
    res.render('error', { error: `404 - Page not found!` })
  }
}

module.exports = HomeController