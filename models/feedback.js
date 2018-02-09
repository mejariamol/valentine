var mongoose = require('mongoose')
var Schema = mongoose.Schema

var feedbackSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

var Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback