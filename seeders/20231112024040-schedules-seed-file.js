'use strict'
const faker = require('faker')
const { fn } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const schedules = Array.from({ length: 10 }).map(async () => {
      const userId = faker.random.number({ min: 1, max: 10 })
      const teacherId = faker.random.number({ min: 1, max: 10 })
      // 檢查 UserId 是否存在
      const existingUser = await queryInterface.sequelize.query(
        `SELECT id FROM Users WHERE id = ${userId}`,
        { type: Sequelize.QueryTypes.SELECT }
      )

      // 檢查 TeacherId 是否存在
      const existingTeacher = await queryInterface.sequelize.query(
        `SELECT id FROM Teachers WHERE id = ${teacherId}`,
        { type: Sequelize.QueryTypes.SELECT }
      );

      if (!existingUser || existingUser.length === 0) {
        console.error(`User with id ${userId} does not exist.`);
        return null; // 或者你可以採取其他適當的處理方式
      } else if (!existingTeacher || existingTeacher.length === 0) {
        console.error(`Teacher with id ${teacherId} does not exist.`);
        return null; // 或者你可以採取其他適當的處理方式
      } else {
        // 插入數據
        const startDate = faker.date.between('2023-01-01', '2030-12-31');
        const startTime = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');

        const scheduleData = {
          startTime,
          endTime: new Date(new Date(startDate).getTime() + 3600000).toISOString().slice(0, 19).replace('T', ' '),
          dayOfWeek: fn('STR_TO_DATE', faker.random.arrayElement(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']), '%W'),
          duration: fn('SEC_TO_TIME', faker.random.number({ min: 3600, max: 10800 })), // 隨機生成 1 到 3 小時的時間間隔
          availableTime: new Date(new Date(startDate).getTime() + 3600000).toISOString().slice(0, 19).replace('T', ' '),
          studentName: faker.name.findName(),
          sessionLink: faker.internet.url(),
          created_at: new Date(),
          updated_at: new Date(),
          UserId: userId,
          TeacherId: teacherId,
        };

        await queryInterface.bulkInsert('Schedules', [scheduleData]);
        return scheduleData;
      }
    })

    // 使用 Promise.all 等待所有插入操作完成，並過濾掉為 null 的值
    const validSchedules = (await Promise.all(schedules)).filter(schedule => schedule !== null);

    console.log(`Inserted ${validSchedules.length} schedules successfully.`);
  },
}