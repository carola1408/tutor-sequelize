'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    role: DataTypes.STRING,
    learning_hours: DataTypes.TIME
  }, {
    underscored: true,
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
