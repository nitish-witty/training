module.exports = (sequelize, DataTypes) => {
  const Series = sequelize.define(
    "Series",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      seriesName: {
        type: DataTypes.TEXT,
        field: "name",
        allowNull: false
      },
      episodes: {
        type: DataTypes.NUMERIC,
        field: "episodes",
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
      }
    },
    {
      schema: "app",
      tableName: "series",
      timestamps: false
    }
  );

  Series.associate = function (model) {
    const { Series } = model;
    return Series;
  };
};
