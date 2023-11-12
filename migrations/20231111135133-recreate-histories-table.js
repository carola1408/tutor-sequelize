'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 創建新的 histories 表
    await queryInterface.createTable('Histories', {
      // 在這裡添加表的結構和字段
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      courseName: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    // 在這裡添加回滾邏輯，如果需要
    await queryInterface.dropTable('Histories');
  },
}
