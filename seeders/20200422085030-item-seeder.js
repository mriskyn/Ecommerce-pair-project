'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Surgical Mask',
        category: 'masker',
        quantity: 40,
        weight: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'N95 Mask',
        category: 'masker',
        quantity: 40,
        weight: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sensi Mask',
        category: 'masker',
        quantity: 40,
        weight: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        category: 'masker',
        quantity: 40,
        weight: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'P95 Mask',
        category: 'masker',
        quantity: 40,
        weight: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }

};
