const { Item, Customer } = require('../models')

class CustomerController {

  static read (req,res){
    Item.findAll({order : [['name', 'ASC']]})
    .then(data=>{
      res.render('itemsList', {data})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static add_item(req,res){
    Item.update({
      tag: true
    }, {where: {id: req.params.id}})
    .then(()=>{
      return Item.findAll({order : [['name', 'ASC']]})
    })
    .then(data=>{
      res.render('itemsList', {data})
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
      return Item.findAll({order : [['name', 'ASC']]})
    })
    .then(data=>{
      res.render('itemsList', {data})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  

}

module.exports = CustomerController