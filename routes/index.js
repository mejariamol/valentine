var express = require('express');
var router = express.Router();

var Greeting = require('../models/greeting')

/* Front End */

router.get('/', (req, res, next) => {
  res.render('create', {
    to_first_name: "Juliet",
    to_last_name: "",
    from_first_name: "Romeo",
    from_last_name: "",
    bg_path: "bg28.jpeg",
    bg_color: "#ff7675",
    message: "Damn, I Really want to KISS YOU! Happy Kiss Day!"
  })
})

router.get('/:_id', (req, res, next) => {
  Greeting.findById(req.params._id, (err, greeting) => {
    if (err | !greeting)
      return res.redirect('/')
    
    res.render('index', {
      to_first_name: greeting.to_first_name,
      to_last_name: greeting.to_last_name,
      from_first_name: greeting.from_first_name,
      from_last_name: greeting.from_last_name,
      bg_path: greeting.bg_path,
      bg_color: greeting.bg_color,
      message: greeting.message
    })
  })
})

router.get('/poster/howto', (req, res, next) => {
  res.render('poster')
})

router.get('/contact-us/feedback', (req, res, next) => {
  res.render('feedback')
})

module.exports = router;
