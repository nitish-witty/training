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
      },
      userId: {
        type: DataTypes.BIGINT,
        field: "user_id",
        allowNull: false
      },
      seriesId: {
        type: DataTypes.BIGINT,
        field: "series_id",
        allowNull: false
      },
      liked: {
        type: DataTypes.BOOLEAN,
        field: "liked"
      },
      rating: {
        type: DataTypes.BIGINT,
        field: "rating"
      },
      userComment: {
        type: DataTypes.TEXT,
        field: "user_comment"
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        field: "is_completed"
      },
      completedAt: {
        type: DataTypes.TIMESTAMPWITHTIMEZONE,
        field: "completed_at"
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