'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chats', [{
      message: 'Toko kami buka dari jam 00.00 sampai jam 25.00',
      keywords: 'buka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      message: 'Kami menyediakan produk alat kesehatan guna mencegah penularan COPID91',
      keywords: 'jual',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      message: 'Harga yang jual sesuai dengan standar di pasar',
      keywords: 'harga',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      message: 'Silahkan klik link home',
      keywords: 'home',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chats', null, {});
  }
};
