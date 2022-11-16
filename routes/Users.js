const express = require('express');
const router = express.Router();
const userRouter = require('../controller/user.controller');
const {Users,Admins} = require('../models');
const bcryptjs = require('bcryptjs');
const { response } = require('express');
router.post('/create',userRouter.saveUser);
router.post('/login',userRouter.userLogin);
router.get('/profile/:id',async(req,res,next)=>{
  const id = req.params.id;

  const data = await Users.findByPk(id);

  res.json(data);
});

router.get('/fetch',async(req,res,next)=>{
  const user = await Users.findAll();
  res.json(user);
})

router.post('/save/info/:id',userRouter.saveUserAdditionalInfo);

router.post('/admin/login',async(req,res,next)=>{
  const data = req.body;
const {email,password} = data;
  if(email != "dssspecializationtrack@gmail.com" && password != "DSSSpecTrack" ){
    res.json({error:"Wrong Password or Email"});
    return;
  }

 
  const foundAdmin = await Admins.findOne({
    where:{email:email}
  });

  if(!foundAdmin){
    const hashed = bcryptjs.hashSync('DSSSpecTrack', 10);
    const emails = "dssspecializationtrack@gmail.com"
    const save = {email:emails, password:hashed};
    await Admins.create(save);
    return;
  }

  const adminPass = foundAdmin.password;
  const result = bcryptjs.compareSync(password, adminPass); 

  if(!result){
    res.json({ error: "Wrong Password" });
    return;
   } 


 
  
  res.json(foundAdmin)
})

router.post('/find/email',async(req,res,next)=>{
  const data = req.body;
  const user = await Users.findOne({
    where:{
      email:data.email
    }
  })
  if(!user){
    res.json({error:"Email Doesn't Exist Email"});
    return;
  }
  res.json(user);
});

router.post('/change/password/:email',async(req,res,next)=>{
  const data = req.body;
  const hashed = bcryptjs.hashSync(data.pass, 10);
  const email = req.params.email;
  const updateRow = await Users.update({
    password:hashed
  },{
    where:{
      email:email
    }
  });

  res.json(updateRow);

})
module.exports = router;