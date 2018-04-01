const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys", async (req, res) => {
    const surveys = await Survey.find();
    res.send(surveys);
  });

  app.post("/api/surveys", async (req, res) => {
    const { title, subject, body, recepients } = req.body;
    const survey = await new Survey({
      title,
      subject,
      body,
      recepients: recepients.split(',').map(email => ({ email: email.trim() })),
      dateSent: Date.now()
    }).save();
    console.log(survey);
    res.sendStatus(201);
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    res.sendStatus(200);
  });
};
