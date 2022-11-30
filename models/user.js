module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataTypes.TEXT,
        field: "name",
        allowNull: false
      },
      emailId: {
        type: DataTypes.TEXT,
        field: "email_id",
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        field: "password"
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "active",
        allowNull: false
      }
    },
    {
      schema: "app",
      tableName: "user",
      timestamps: false
    }
  );

  User.associate = function (model) {
    const { User } = model;
    return User;
  };
};