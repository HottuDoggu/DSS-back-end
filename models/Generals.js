module.exports = (sequelize,DataTypes) => {
  const Generals = sequelize.define("Generals",{
    it102: {
      type:DataTypes.STRING,
      allowNull:false
    },
    it103: {
      type:DataTypes.STRING,
      allowNull:false
    },
    it104: {
      type:DataTypes.STRING,
      allowNull:false
    },
    it105: {
      type:DataTypes.STRING,
      allowNull:false
    },
    it106: {
      type:DataTypes.STRING,
      allowNull:false
    },
    it107: {
      type:DataTypes.STRING,
      allowNull:false
    },
    preffered:{
      type:DataTypes.STRING,
      allowNull:false
    }
  })

  return Generals;
}