'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('schedules', 'studentName', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('schedules', 'sessionLink', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('schedules', 'studentName');
    await queryInterface.removeColumn('schedules', 'sessionLink')
  },
}