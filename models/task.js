"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
          len: {
            arg: [3, 50],
            msg:
              "Your to-do item name must be between 3 and 50 characters.  Please try again."
          }
        }
      },
      done: DataTypes.BOOLEAN,
      description: DataTypes.TEXT
    },
    {}
  );
  Task.associate = function(models) {
    Task.belongsTo(models.Context, {
      foreignKey:'ContextId', 
      onDelete:'CASCADE'
    })
    // associations can be defined here
  };
  return Task;
};
