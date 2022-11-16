module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define("Ratings", {
    rate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });



  return Ratings;
};
