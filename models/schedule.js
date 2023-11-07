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
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    role: DataTypes.BOOLEAN,
    learningHours: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'Schedules', // 新增這裡
    underscored: true
  })
  return Schedule
}