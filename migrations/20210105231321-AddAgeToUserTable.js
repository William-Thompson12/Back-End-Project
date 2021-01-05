'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false
     });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'age')
  }
};
