const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); // so json data will work
app.use(cors()); // whitelist your computer
require("dotenv").config();

const db = require('./models');
const testRouter = require('./routes/Test');
app.use('/test',testRouter);
const userRouter = require('./routes/Users');
app.use('/users',userRouter);
const resultsRouter = require('./routes/Results');
app.use('/results',resultsRouter);
const reportsRouter = require('./routes/Reports');
app.use('/reports',reportsRouter);
const rateRouter = require('./routes/Ratings');
app.use('/rate',rateRouter);
const answerRouter = require('./routes/Answers');
app.use('/answers',answerRouter);


db.sequelize.sync().then(()=>{
  app.listen(process.env.PORT || 3001 , ()=> {
    console.log("Server running port "+ 3001);
  });
});