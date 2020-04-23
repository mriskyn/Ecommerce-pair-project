'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Chat extends Model {
    
  }

  Chat.init({
    message: DataTypes.STRING,
    keywords: DataTypes.STRING
  }, {sequelize})
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};