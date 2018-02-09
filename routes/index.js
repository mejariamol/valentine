var express = require('express');
var router = express.Router();

var Greeting = require('../models/greeting')

/* Front End */

router.get('/', (req, res, next) => {
  let now = new Date().getDate()
  let dayName
  if (now < 7) dayName = Greeting.days[0]
  else if (now > 14) dayName = Greeting.days[6]
  else dayName = Greeting.days[now-7]

  res.render('create', {
    to_first_name: "Juliet",
    to_last_name: "",
    from_first_name: "Romeo",
    from_last_name: "",
    message: "Life is like a Chocolate Box. Each chocolate is like a portion of life. Some are crunchy, some are nutty, some are soft, but all are delicious. Happy Chocolate Day!"
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
