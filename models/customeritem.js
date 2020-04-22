'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class CustomerItem extends Model{

  }

  CustomerItem.init({
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {sequelize});
  CustomerItem.associate = function(models) {
    // associations can be defined here
    
  };
  return CustomerItem;
};