module.exports = (sequelize,DataTypes) => {
  const Choices = sequelize.define("Choices",{
      value: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false
      },
  });


  return Choices;
}