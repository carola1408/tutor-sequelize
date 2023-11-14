'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 種子資料為每個老師添加至少 2 個歷史評價
    const teachers = await queryInterface.sequelize.query(
      'SELECT id FROM Teachers WHERE role = "teacher";',
      { type: Sequelize.QueryTypes.SELECT }
    )

    const histories = [];

    // 等待所有使用者的 id 獲取完成
    const userIds = await queryInterface.sequelize.query(
      'SELECT id FROM Users WHERE role = "user";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await Promise.all(teachers.map(async (teacher) => {
      for (let i = 0; i < 2; i++) {
        // 隨機選擇一個 userId
        const randomUserId = userIds[Math.floor(Math.random() * userIds.length)].id;

        const history = {
          userId: randomUserId,
          courseName: `Course ${i + 1}`,
          rating: Math.floor(Math.random() * 5) + 1,
          created_at: new Date(),
          updated_at: new Date(),
          teacherId: teacher.id,
        };
        histories.push(history)
      }
    }));

    // 插入資料
    await queryInterface.bulkInsert('Histories', histories, {})
  },

  down: async (queryInterface, Sequelize) => {
    // 清空 Histories 表的資料
    await queryInterface.bulkDelete('Histories', null, {})
  },
}
