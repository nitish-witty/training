module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      movieName: {
        type: DataTypes.TEXT,
        field: "name",
        allowNull: false
      },
      rating: {
        type: DataTypes.BIGINT,
        field: "rating",
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "active",
        allowNull: false
      },
      launchedAt: {
        type: DataTypes.TIMESTAMPWITHTIMEZONE,
        field: "launched_at",
        allowNull: false
      },
      duration: {
        type: DataTypes.TEXT,
        field: "duration",
        allowNull: false
      }
    },
    {
      schema: "app",
      tableName: "movie",
      timestamps: false
    }
  );

  Movie.associate = function (model) {
    const { Movie } = model;
    return Movie;
  };
};
