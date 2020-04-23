const { Item, CustomerItem } = require('../models')

class CustomerController {

  static read(req, res) {
    Item.findAll({ order: [['name', 'ASC']] })
      .then(data => {
        res.render('itemsList', { data })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static add_item(req, res) {
    // res.send(req.session)
    CustomerItem.findOne({where: {ItemId : req.body.item_id}})
    .then(data=>{
      if(!data){
        CustomerItem.create({
          CustomerId: req.session.userId,
          ItemId: req.body.item_id,
          quantity: req.body.quantity
        })
        // res.send('asd')
      } else {
        return CustomerItem.update({
          quantity: data.quantity + Number(req.body.quantity)
        }, {where: {
          ItemId : req.body.item_id,
        }})
      }
    })
    .then(()=>{
      res.redirect('/customers')
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }
}

module.exports = CustomerController