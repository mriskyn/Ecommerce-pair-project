const { Item } = require('../models')

class ItemController {
  static read(req, res) {
    Item.findAll({ order: [['quantity', 'ASC']] })
      .then(data => {
        res.render('items', { data })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static add_get(req, res) {
    res.render('addItem')
  }

  static add_post(req, res) {
    Item.create({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      weight: req.body.weight
    })
      .then(() => {
        res.redirect('/items')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static delete(req, res) {
    Item.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.redirect('/items')
      }).catch(error => {
        res.render('error', { error })
      })
  }

  static edit_get(req, res) {
    Item.findByPk(req.params.id)
      .then(data => {
        res.render('editItem', { data })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static edit_post(req, res) {
    Item.update({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      weight: req.body.weight
    }, { where: { id: req.params.id } })
      .then(() => {
        res.redirect('/items')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

}

module.exports = ItemController