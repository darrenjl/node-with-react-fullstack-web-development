const mongoose = require("mongoose");
const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for your feedback");
  });

  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find();
    res.send(surveys);
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recepients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recepients: recepients.split(",").map(email => ({ email: email.trim() })),
      dateSent: Date.now()
    });
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    res.sendStatus(200);
  });
};
