'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 取得所有 users 的 id
    const userIds = (await queryInterface.sequelize.query(
      'SELECT id FROM Users WHERE role = "user";',
      { type: Sequelize.QueryTypes.SELECT }
    )).map(user => user.id);

    // 創建每個使用者至少 2 頁（10 篇）老師可以選擇
    const teacherCount = 10
    const teachers = []
    for (const userId of userIds) {
      for (let i = 0; i < teacherCount; i++) { // 每個使用者 10 位老師
        const teacher = {
          role: 'teacher',
          introduction: faker.lorem.sentences(),
          style: faker.lorem.sentence(),
          videoLink: faker.internet.url(), // 隨機生成一個網址
          comment: faker.lorem.paragraph(), // 隨機生成一個段落的文本
          rating: faker.random.number({ min: 1, max: 5 }), // 隨機生成一個介於 1 和 5 之間的數字
          UserId: userId,
          created_at: new Date(),
          updated_at: new Date()
        }
        teachers.push(teacher)
      }
    }

    // 插入資料
    await queryInterface.bulkInsert('Teachers', teachers, {});
  },

  down: async (queryInterface, Sequelize) => {
    // 清除數據
    await queryInterface.bulkDelete('Teachers', null, {});
  },
}
