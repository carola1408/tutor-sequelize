'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      // define association here
      Teacher.belongsTo(models.User, { foreignKey: 'userId' })
      Teacher.hasMany(models.Reservation, { foreignKey: 'teacherId' })
      Teacher.hasMany(models.Opinion, { foreignKey: 'teacherId' })
      Teacher.hasMany(models.History, { foreignKey: 'teacherId' })
      Teacher.hasMany(models.Schedule, { foreignKey: 'teacherId' })
    }
  };
  Teacher.init({
    introduction: DataTypes.TEXT,
    style: DataTypes.STRING,
    videoLink: DataTypes.STRING,
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teacher',
    tableName: 'Teachers', // 新增這裡
    underscored: true
  })
  return Teacher
}