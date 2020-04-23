const { Item, Customer, CustomerItem } = require('../models')
const Convert = require('../helpers/convert')

class CartController {
  static readCart(req, res) {
    Customer.findByPk(req.session.userId, { include: [{ model: Item }] })
      .then(data => {
        res.render('cart', { data, Convert })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static remove_item(req, res) {
    CustomerItem.destroy({ where: { ItemId: req.params.id } })
      .then(() => {
        res.redirect('/carts')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static checkout(req, res) {
    Customer.findByPk(req.session.userId, { include: [{ model: Item }] })
      .then(data => {
        // res.send(data)
        console.log(data)
        res.render('checkout', { data, Convert })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

}

module.exports = CartController