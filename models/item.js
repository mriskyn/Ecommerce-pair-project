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
    weight: DataTypes.INTEGER
  }, {sequelize});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};