var express = require('express');
var router = express.Router();

var Greeting = require('../models/greeting')

/* Front End */

router.get('/', (req, res, next) => {
  res.render('create', {
    to_first_name: "",
    to_last_name: "",
    from_first_name: "",
    from_last_name: "",
    bg_path: "bg35.jpg",
    photu_path: "/images/heart.gif",
    bg_color: "#ff7675",
    message: "Sometimes, its not about being together... Its about being there for each other. Happy Valentine's Day!"
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
      photu_path: greeting.photu_path,
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
