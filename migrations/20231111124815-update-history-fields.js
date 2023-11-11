'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 第一步：刪除 comment 列
    await queryInterface.removeColumn('Histories', 'comment')
    // 第二步：添加 courseName 列
    await queryInterface.addColumn('Histories', 'courseName', { type: Sequelize.STRING })

  },

  down: async (queryInterface, Sequelize) => {
    // 恢復 comment 欄位
    await queryInterface.renameColumn('Histories', 'courseName', 'comment');


  }
}
