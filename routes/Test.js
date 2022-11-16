const express = require('express');
const router = express.Router();
const {Questions,Choices} = require('../models');
const testController = require('../controller/test.controller');
router.post('/questions/create',async(req,res,next)=>{
  const test = req.body;
  await Questions.create(test);
  res.json(test);
});
router.get('/questions/fetch',async(req,res,next)=>{
  const test = await Questions.findAll();
  res.json(test);
});
router.post('/questions/delete/:id',async(req,res,next)=>{
  const id = req.params.id;
//const count = await Invoice.destroy({ where: { id: 2 } });
  const count = await Questions.destroy({where:{id:id}})
  res.json(count);
});

router.post('/choice/delete/:id',async(req,res,next)=>{
  const id = req.params.id;
//const count = await Invoice.destroy({ where: { id: 2 } });
  const count = await Choices.destroy({where:{id:id}})
  res.json(count);
});

router.post('/choice/save/:id',testController.saveChoice);
router.get('/choice/fetch/:id',testController.getChoices);

router.post('/questions/update/:id',async(req,res,next)=>{
  const data = req.body;
  const id = req.params.id;

  const updateRow = await Questions.update(data,{
    where:{
      id:id
    }
  });
  res.json(updateRow);
})


module.exports = router;