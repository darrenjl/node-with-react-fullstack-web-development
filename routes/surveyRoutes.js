const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for your feedback");
  });

  app.get("/api/surveys", async (req, res) => {
    try {
      const surveys = await Survey.find({
        _user: req.user.id
      }).select({ recipients: false });
      res.send(surveys);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      dateSent: Date.now(),
      _user: req.user.id
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
    const p = Path.createPath("/api/surveys/:surveyId/:choice");
    console.log("Webhook request received");
    //don't need to handle as asynchronous because we don't
    //need to respond to sendgrid with any specific dta
    _.chain(req.body)
      .map(({ email, url }) => {
        console.log("Attempting to match: " + url + ", " + email);
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({});
  });
};
