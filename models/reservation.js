
'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User)
      Reservation.belongsTo(models.Teacher)

    }
  };
  Reservation.init({
    reservationTime: DataTypes.TIME,
    success: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'Reservations', // 新增這裡
    underscored: true
  })
  return Reservation
}