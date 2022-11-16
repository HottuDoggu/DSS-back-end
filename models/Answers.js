module.exports = (sequelize,DataTypes) => {
  const Answers = sequelize.define("Answers",{
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
  });
  

  return Answers
}