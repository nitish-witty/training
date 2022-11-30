module.exports = (sequelize, DataTypes) => {
  const Episodes = sequelize.define(
    "Episodes",
    {
      id: {
        type: DataTypes.BIGINT,
        field: "id",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      episodeName: {
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
      seriesId: {
        type: DataTypes.BIGINT,
        field: "series_id",
        allowNull: false
      },
      launchedAt: {
        type: DataTypes.TIMESTAMPWITHTIMEZONE,
        field: "launched_at"
      },
      duration: {
        type: DataTypes.TEXT,
        field: "duration"
      }
    },
    {
      schema: "app",
      tableName: "episodes",
      timestamps: falses
    }
  );

  Episodes.associate = function (model) {
    const { Episodes } = model;
    return Episodes;
  };
};
