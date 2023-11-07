'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    dayOfWeek: DataTypes.DATE,
    duration: DataTypes.TIME,
    availableTime: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};