module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define("Admins", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });



  return Admins;
};
