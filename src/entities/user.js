const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      phone: {
        type: DataTypes.STRING(20),
      },
      fullname: {
        type: DataTypes.STRING(256),
      },
      password: {
        type: DataTypes.STRING(256),
      },
      avatar: {
        type: DataTypes.STRING(500),
      },
      status: {
        type: DataTypes.STRING(20),
      },
      createTime: {
        type: DataTypes.DATE,
      },
      activationDate: {
        type: DataTypes.DATE,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      idNumber: {
        type: DataTypes.STRING(20),
      },
      type: {
        type: DataTypes.STRING(32),
      },
      nickname: {
        type: DataTypes.STRING(255),
      },
      username: {
        type: DataTypes.STRING(128),
      },
      subId: {
        type: DataTypes.STRING(128),
      },
    },
    {
      timestamps: false,
      tableName: "users",
    },
  );
  // User.prototype.toJSON = function () {
  //   var values = Object.assign({}, this.get());
  //   const unusedFields = ["password"];
  //   for (field of unusedFields) delete values[`${field}`];
  //   return values;
  // };
  return User;
};
