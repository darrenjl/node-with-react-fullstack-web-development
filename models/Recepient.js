const mongoose = require('mongoose');
const { Schema } = mongoose;

const recepientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

// exporting instead of registering as we will use it as a subdocument collection
module.exports = recepientSchema;