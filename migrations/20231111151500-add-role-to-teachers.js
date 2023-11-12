'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Teachers', 'role', {
      type: Sequelize.STRING,
      defaultValue: 'student'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Teachers', 'role')
  }
}