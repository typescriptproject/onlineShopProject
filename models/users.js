'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      userId: { primaryKey: true, type: DataTypes.BIGINT },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      point: DataTypes.BIGINT,
      blacklist: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};