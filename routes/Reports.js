const express = require('express')
const router = express.Router();
const {Users,Recommendations,Ratings,Generals,Questions,Answers} = require('../models');
router.get('/stats/count',async(req,res,next)=>{

  const studentCount = await Users.count();
  const recommendCount = await Recommendations.count();
  const matchCount = await Recommendations.count({
    where:{match:true}
  });

  let unMatchCount =  recommendCount - matchCount;
  const recAll = await Recommendations.count({
    where:{recommended:"Recommended All"}
  })

  const webdev = await Recommendations.count({
    where:{recommended:"Web and Mobile Development"}
  })
  const service = await Recommendations.count({
    where:{recommended:"Service Management"}
  })
  const business = await Recommendations.count({
    where:{recommended:"Business Analytics"}
  })

  const webserCount = await Recommendations.count({
    where:{recommended:"WebDev and Service Management"}
  })

  const webbusCount = await Recommendations.count({
    where:{recommended:"Webdev and Business Analytics"}
  })

  const serbusCount = await Recommendations.count({
    where:{recommended:"Service and Business Analytics"}
  });

  const rate = await Ratings.findAll();
  let sumRate = 0;
  rate.map((val)=>{
    sumRate = Number(val.rate) + sumRate;
  });

  let rateAve = sumRate / rate.length;

  const rate1 = await Ratings.count({
    where:{rate:1}
  });
  const rate2 = await Ratings.count({
    where:{rate:2}
  });
  const rate3 = await Ratings.count({
    where:{rate:3}
  });
  const rate4 = await Ratings.count({
    where:{rate:4}
  });
  const rate5 = await Ratings.count({
    where:{rate:5}
  });

  const data = {students:studentCount,match:matchCount,unmatch:unMatchCount,webdev:webdev + webserCount + webbusCount + recAll,business: business + webbusCount +serbusCount + recAll, service:service + serbusCount + webserCount + recAll,rate:rateAve,rate1:rate1,rate2:rate2,rate3:rate3,rate4:rate4,rate5:rate5}

  res.json(data);

});

router.get('/general/:id',async(req,res,next)=>{
  const id = req.params.id;

  const data = await Generals.findOne({
    where:{UserId:id}
  });
  res.json(data);
});

router.get('/questions',async(req,res,next)=>{

  const data = await Questions.findAll();
  res.json(data);
});

router.get('/useranswers/:uid/:qid',async(req,res,next)=>{
  const uid = req.params.uid;
  const qid = req.params.qid;

  const data = await Answers.findAll({
    where:{
      UserId:uid,
      QuestionId:qid
    }
  });

  res.json(data);
})

module.exports = router;