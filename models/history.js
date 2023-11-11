'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class History extends Model {

    static associate(models) {
      // define association here
      History.belongsTo(models.User)
      History.belongsTo(models.Teacher)
    }
  };
  History.init({
    courseName: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'History',
    tableName: 'Histories', // 新增這裡
    underscored: true
  })
  return History
}