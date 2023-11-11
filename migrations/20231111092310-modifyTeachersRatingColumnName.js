'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 將 ratingt 欄位名稱改成 rating
    await queryInterface.renameColumn('Teachers', 'ratingt', 'rating');
  },

  down: async (queryInterface, Sequelize) => {
    // 如果需要撤銷，則將 rating 欄位名稱改回 ratingt
    await queryInterface.renameColumn('Teachers', 'rating', 'ratingt');
  }
}