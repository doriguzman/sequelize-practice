"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING, allowedNull: false }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Context, {
      // passing the foreign key in context
      foreignKey: "UserId",
      onDelete: "CASCADE"
    });
  };
  return User;
};
