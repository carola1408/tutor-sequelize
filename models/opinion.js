'use strict';
module.exports = (sequelize, DataTypes) => {
  const Opinion = sequelize.define('Opinion', {
    comment: DataTypes.TEXT,
    rating: DataTypes.STRING
  }, {
    underscored: true,
  });
  Opinion.associate = function(models) {
    // associations can be defined here
  };
  return Opinion;
};