const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecepientSchema = require('./Recepient');

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recepients: [RecepientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    // convention _user to indicate relationship field
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);