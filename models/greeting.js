var mongoose = require('mongoose')
var Schema = mongoose.Schema

var greetingSchema = new Schema({
  to_first_name: {
    type: String,
    required: true,
    trim: true
  },
  to_last_name: {
    type: String,
    trim: true
  },
  from_first_name: {
    type: String,
    required: true,
    trim: true
  },
  from_last_name: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  bg_path: {
    type: String,
    required: true,
    default: 'bg23.jpeg'
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
})

var Greeting = mongoose.model('Greeting', greetingSchema)

module.exports = Greeting