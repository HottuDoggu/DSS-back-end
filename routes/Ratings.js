const express = require('express');
const router = express.Router();
const {Ratings} = require('../models');

router.post('/create',async(req,res,next)=>{
  const data = req.body;
  await Ratings.create(data);

  res.json(data);
})

module.exports  = router;