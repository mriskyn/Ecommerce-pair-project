'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Customer extends Model {
    full_name(){
      return `${this.first_name} ${this.last_name}` 
    }
    exactLocation(){
      return this.location.split('_').join(' ')      
    }
  }


  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    location: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {sequelize});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Item, {through:models.CustomerItem})
    // Customer.hasMany(models.CustomerItem)
  };
  return Customer;
};