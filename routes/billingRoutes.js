const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({error: 'You must be logged in'});
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 5 credits"
    });

    // passport adds it to the request
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};