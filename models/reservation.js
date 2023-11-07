'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    reservationTime: DataTypes.TIME,
    success: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};