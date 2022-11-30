module.exports = (sequelize, DataTypes) => {
  const UserEpisodeWatched = sequelize.define(
    "UserEpisodeWatched",
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
      episodeId: {
        type: DataTypes.BIGINT,
        field: "episode_id",
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
      tableName: "user_episode_watched",
      timestamps: false
    }
  );

  UserEpisodeWatched.associate = function (model) {
    const { UserEpisodeWatched } = model;
    return UserEpisodeWatched;
  };
};
