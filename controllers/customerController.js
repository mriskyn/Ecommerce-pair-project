const { Item, Customer } = require('../models')

class CustomerController {

  static read (req,res){
    Item.findAll({order : [['quantity', 'DESC']]})
    .then(data=>{
      res.render('itemsList', {data})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  // static add_get (req,res){
    
  // }
}

module.exports = CustomerController