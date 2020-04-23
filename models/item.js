'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Item extends Model{

  }


  Item.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    tag: DataTypes.BOOLEAN
  }, {sequelize});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Customer, {through:models.CustomerItem})
    // Item.hasMany(models.CustomerItem)
  };
  return Item;
};