'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 將 TIME 欄位更改為 DATETIME
    await queryInterface.changeColumn('Schedules', 'startTime', {
      type: Sequelize.DATE,
    })

    await queryInterface.changeColumn('Schedules', 'endTime', {
      type: Sequelize.DATE,
    });

    await queryInterface.changeColumn('Schedules', 'availableTime', {
      type: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    // 撤銷更改
    await queryInterface.changeColumn('Schedules', 'startTime', {
      type: Sequelize.TIME,
    })

    await queryInterface.changeColumn('Schedules', 'endTime', {
      type: Sequelize.TIME,
    })

    await queryInterface.changeColumn('Schedules', 'availableTime', {
      type: Sequelize.TIME,
    })
  },
}