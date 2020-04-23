const {CustomerItem, Customer, Item} = require('../models')

class AdminController{

    static datas(req, res){
        CustomerItem.findAll({
            include: [Customer, Item]
        })
        .then(data => {
            res.render('admin', {data})
        })
        .catch(error => {
            res.render('error', {error})
        })
    }
}

module.exports = AdminController