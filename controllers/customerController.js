const { Item, CustomerItem } = require('../models')
const Convert = require('../helpers/convert')

class CustomerController {

  static read(req, res) {
    Item.findAll({ order: [['name', 'ASC']] })
      .then(data => {
        res.render('itemsList', { data, Convert })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static add_item(req, res) {
    CustomerItem.findOne({ where: { ItemId: req.body.item_id } })
      .then(data => {
        if (!data) {
          CustomerItem.create({
            CustomerId: req.session.userId,
            ItemId: req.body.item_id,
            quantity: req.body.quantity
          })
        } else {
          console.log(req.body)
          return CustomerItem.update({
            quantity: data.quantity + Number(req.body.quantity)
          }, {
            where: {
              ItemId: req.body.item_id,
            }
          })
        }
      })
      .then(() => {
        return Item.findByPk(req.body.item_id, {})
      })
      .then(data => {
        return Item.update({
          quantity: data.quantity - Number(req.body.quantity)
        }, {
          where: {
            id: req.body.item_id
          }
        })
      })
      .then(() => {
        res.redirect('/customers')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }
}

module.exports = CustomerController