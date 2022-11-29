module.exports = (sequelize, DataTypes) => {
  const UserSeriesWatched = sequelize.define(
    "UserSeriesWatched",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      schema: "app",
      tableName: "user_series_watched",
      timestamps: false
    }
  );

  UserSeriesWatched.associate = function (model) {
    const { UserSeriesWatched } = model;
    return UserSeriesWatched;
  };
};
