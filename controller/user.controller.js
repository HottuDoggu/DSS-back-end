
const {Users,Generals} = require('../models');
const bcryptjs = require('bcryptjs');

const saveUser = async(req,res,next) => {
  const user = req.body;
   const {email,studentnumber,password,test,name} = user;
   const foundEmail = await Users.findOne({
     where:{
       email:email
     }
   });
  const foundStudentNo = await Users.findOne({
    where:{
      studentnumber:studentnumber
    }
  });

  if(foundEmail){
   res.json({
      message:"Email is already taken",
      status:400
    })
    return;
  }
  if(foundStudentNo){
    res.json({
      message:"Student Number already exist",
      status:400
    })
    return;
  }

const hashed = bcryptjs.hashSync(password, 10);
const data = {email:email,studentnumber:studentnumber,password:hashed,test:test,name:name}

  await Users.create(data);
  res.json({
    message:"success",
    status:200
  })
};

const userLogin = async(req,res,next) =>{
  const user = req.body;
  const {email,password} = req.body;
  const foundUser = await Users.findOne({ where: { email: email} });
  
  if (!foundUser){
    res.json({ error: "User Doesn't Exist" });
    return;
  }
    const userPass = foundUser.password;
   const result = bcryptjs.compareSync(password, userPass); 

   if(!result){
    res.json({ error: "Wrong Password" });
    return;
   } 

   res.json({uid:foundUser.id});
}

const saveUserAdditionalInfo = async(req,res,next) =>{
  const data = req.body;
  const id = req.params.id;
  const foundUser = await Generals.findOne({
    where:{
      UserId:id
    }
  })
  if(foundUser){
    res.json({error:"Duplicated"});
    return;
  }

  const {preffered,grade} = data;
  const dataSave = {...data,UserId:id};
  await Generals.create(dataSave);
res.json(data)
}


module.exports = {saveUser,userLogin,saveUserAdditionalInfo}