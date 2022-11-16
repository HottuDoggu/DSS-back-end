const express = require("express");
const router = express.Router();
const { Results, Users, Recommendations, Generals } = require("../models");

router.post("/create/:id", async (req, res, next) => {
  const result = req.body;
  const { UserId, recommendation } = result;
  const id = req.params.id;
  const foundUser = await Results.findOne({
    where: {
      UserId: UserId,
    },
  });

  const userInfo = await Users.findOne({
    where: { id: UserId },
  });

  const generalInfo = await Generals.findOne({
    where: { UserId: UserId },
  });

  let Rec = false;
  if (generalInfo.preffered == id) {
    Rec = true;
  } else {
    Rec = false;
  }

  if (recommendation == "Recommended All") {
    Rec = true;
  } else if (
    recommendation == "Service and Business Analytics" &&
    (id == "service" || id == "business")
  ) {
    Rec = true;
  } else if (
    recommendation == "WebDev and Service Management" &&
    (id == "service" || id == "webdev")
  ) {
    Rec = true;
  } else if (
    recommendation == "Webdev and Business Analytics" &&
    (id == "business" || id == "webdev")
  ) {
    Rec = true;
  }

  if (!foundUser) {
    await Results.create(result);
    const updateRows = await Users.update(
      {
        test: true,
      },
      {
        where: { id: UserId },
      }
    );

    const dataRec = {
      recommended: recommendation,
      preffered: generalInfo.preffered,
      match: Rec,
      UserId: UserId,
    };

    await Recommendations.create(dataRec);

    res.json(result);
    return;
  }

  res.json({ error: "Test Already Taken" });
});

router.get("/fetch/:id", async (req, res, next) => {
  const id = req.params.id;

  const data = await Results.findOne({
    where: {
      UserId: id,
    },
  });

  res.json(data);
});

module.exports = router;
