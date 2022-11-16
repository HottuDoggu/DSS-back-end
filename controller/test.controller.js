const {Choices} = require('../models');


const saveChoice = async(req,res,next) => {
  const qid = req.params.id;
  const choice = req.body;
  await Choices.create(choice);
  res.json(choice)
}

const getChoices = async(req,res,next) => {
  const qid = req.params.id;
  const choice = await Choices.findAll({
    where:{
      QuestionId:qid
    }
  })
  res.json(choice)
}


module.exports = {saveChoice,getChoices};