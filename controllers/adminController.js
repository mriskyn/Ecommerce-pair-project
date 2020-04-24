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

    static getAdd(req, res){
        Item.findAll({
            order: [['id', 'asc']]
        })
        .then(data => {
            res.render('admin_add_item', {data})
        })
        .catch(error => {
            res.render('error', {error})
        })
    }

    static postAdd(req, res){
        console.log(req.body)
        Item.update({
            quantity: Number(req.body.quantity[0]) + Number(req.body.quantity[1])
        }, {
            where: {
                id: Number(req.body.id)
            }
        })
        .then(() => {
            res.redirect('/login/admin/add')
        })
        .catch(error => {
            res.render('error', {error})
        })
    }
}

module.exports = AdminController