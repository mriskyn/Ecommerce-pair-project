'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Customer extends Model {

  }


  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    location: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {sequelize});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};