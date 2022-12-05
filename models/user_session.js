module.exports = (sequelize, DataTypes) => {
  const UserSession = sequelize.define(
    "UserSession",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.BIGINT,
        field: "user_id",
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "active",
        allowNull: false
      },
      token: {
        type: DataTypes.TEXT,
        field: "token",
        allowNull: false
      }
    },
    {
      schema: "app",
      tableName: "user_session",
      timestamps: false
    }
  );

  UserSession.associate = function (model) {
    const { UserSession } = model;

    UserSession.belongsTo(User, {
      as: "User",
      foreignKey: "user_id",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION"
    });
    return UserSession;
  };
};
