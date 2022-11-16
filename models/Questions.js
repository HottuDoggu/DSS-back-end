module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalanswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Questions.associate = (models) => {
    Questions.hasMany(models.Choices,{
      onDelete:"Cascade"
    })
    Questions.hasMany(models.Answers,{
      onDelete:"Cascade"
    })
  }


  return Questions;
};
