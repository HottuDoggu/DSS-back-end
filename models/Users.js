module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   studentnumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    test: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Results,{
      onDelete:"Cascade"
    });
    Users.hasMany(models.Recommendations,{
      onDelete:"Cascade"
    });
    Users.hasMany(models.Generals,{
      onDelete:"Cascade"
    });
    Users.hasMany(models.Ratings,{
      onDelete:"Cascade"
    });
    Users.hasMany(models.Answers,{
      onDelete:"Cascade"
    });
  }
  

  return Users;
};
