'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.User)
      Schedule.belongsTo(models.Teacher)
    }
  };
  Schedule.init({
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    dayOfWeek: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    availableTime: DataTypes.DATE,
    studentName: DataTypes.STRING, // 新增的欄位
    sessionLink: DataTypes.STRING, // 新增的欄位
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'Schedules', // 新增這裡
    underscored: true
  })
  return Schedule
}