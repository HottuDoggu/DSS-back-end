const express = require('express');
const router = express.Router();
const {Answers} = require('../models');
router.post('/save',async(req,res,next)=>{
  const data = req.body;
  await Answers.create(data);
  res.json(data);
})


module.exports = router;