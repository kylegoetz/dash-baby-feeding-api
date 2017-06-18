'use strict';
module.exports = function(sequelize, DataTypes) {
  var Click = sequelize.define('Click', {
    dashMacAddress: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Click;
};
