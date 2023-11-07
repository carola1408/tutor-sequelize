'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    comment: DataTypes.TEXT,
    rating: DataTypes.STRING
  }, {
    underscored: true,
  });
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};