module.exports = (sequelize,DataTypes) => {
  const Recommendations = sequelize.define("Recommendations",{
    recommended: {
      type:DataTypes.STRING,
      allowNull:false
    },
    preffered: {
      type:DataTypes.STRING,
      allowNull:false
    },
    match:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  })

  return Recommendations;
}