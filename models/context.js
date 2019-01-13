'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: DataTypes.STRING
  }, {});
  Context.associate = function(models) {
    Context.hasMany(models.Task, {
      foreignKey:'ContextId', 
      onDelete:'CASCADE'
    });
    Context.belongsTo(models.User,{
      foreignKey:'UserId',
      onDelete:'CASCADE'
    })
    // associations can be defined here
  };
  return Context;
};