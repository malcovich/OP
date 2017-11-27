const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BetSchema = new Schema({
    userId: {type:String, required: true},
    betType: {type:String, required: true},
    betDate: {type:Date, required: true},
    events: [{
        team1: {type:String, required: true},
        team2: {type:String, required: true},
        result: {type:String,required: true},
        odd: {type:Number, require: true},
        betEvent: {type:String, required: true}
    }],
    result: {type:String,required: true},
    sum: {type:Number,required: true}
});

module.exports = mongoose.model('bets', BetSchema, 'bets');

