'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    introduction: DataTypes.TEXT,
    style: DataTypes.STRING,
    videoLink: DataTypes.STRING,
    comment: DataTypes.TEXT,
    ratingt: DataTypes.STRING
  }, {
    underscored: true,
  });
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};