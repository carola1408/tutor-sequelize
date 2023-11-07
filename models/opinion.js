'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Opinion extends Model {

    static associate(models) {
      // define association here
      Opinion.belongsTo(models.User)
      Opinion.belongsTo(models.Teacher)
    }
  };
  Opinion.init({
    comment: DataTypes.TEXT,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opinion',
    tableName: 'Opinions', // 新增這裡
    underscored: true
  })
  return Opinion
}