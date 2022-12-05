module.exports = (sequelize, DataTypes) => {
  const UserMovieWatched = sequelize.define(
    "UserMovieWatched",
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
      movieId: {
        type: DataTypes.BIGINT,
        field: "movie_id",
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
      tableName: "user_movie_watched",
      timestamps: false
    }
  );

  UserMovieWatched.associate = function (model) {
    const { UserMovieWatched } = model;

    UserMovieWatched.belongsTo(Movie, {
      as: "Movie",
      foreignKey: "movie_id",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION"
    });

    UserMovieWatched.belongsTo(User, {
      as: "User",
      foreignKey: "user_id",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION"
    });
    return UserMovieWatched;
  };
};
