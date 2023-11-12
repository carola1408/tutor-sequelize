'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 在 Histories 表中添加 type 欄位
    await queryInterface.addColumn('Histories', 'type', {
      type: Sequelize.STRING,
      allowNull: true, // 如果需要允許為空，可以設置為 true
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 刪除 Histories 表中的 type 欄位
    await queryInterface.removeColumn('Histories', 'type');
  },
}