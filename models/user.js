'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasOne(models.Teacher, { foreignKey: 'userId' })
      User.hasMany(models.Reservation, { foreignKey: 'userId' })
      User.hasMany(models.Opinion, { foreignKey: 'userId' })
      User.hasMany(models.History, { foreignKey: 'userId' })
      User.hasMany(models.Schedule, { foreignKey: 'userId' })
    }
  };
  User.init({
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    role: DataTypes.STRING,
    learning_hours: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users', // 新增這裡
    underscored: true
  })
  return User
}