module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define("Results", {
    webdevscore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servicescore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   businessscore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    webdevave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recommendation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


  return Results;
};
