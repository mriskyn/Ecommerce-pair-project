const { Item, Customer, CustomerItem } = require('../models')

class CartController {

  static readCart (req,res){
    // res.send('asd')
    Item.findAll({where: {tag: true}})
    .then(data=>{
      res.render('cart', {data})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static remove_item(req,res){
    Item.update({
      // quantity: Number(req.body.quantity) - 1,
      tag: false
    }, {where: {id: req.params.id}})
    .then(()=>{
      return Item.findAll({where: {tag: true}})
    })
    .then(data=>{
      res.render('cart', {data})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static checkout(req,res){
    // res.send('asd')
    res.send(req.body)
    // Item.findAll({where: {tag: true}})
    // .then(data=>{
    //   // res.render('cart', {data})
    // })
    // .catch(error=>{
    //   res.render('error', {error})
    // })
  }
}

module.exports = CartController