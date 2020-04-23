'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class CustomerItem extends Model{

  }

  CustomerItem.init({
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {sequelize});
  CustomerItem.associate = function(models) {
    // associations can be defined here
    // CustomerItem.belongsTo(models.Customer)
    // CustomerItem.belongsTo(models.Item)
  };
  return CustomerItem;
};