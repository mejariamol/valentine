var express = require('express');
var router = express.Router();

var Greeting = require('../models/greeting')

/* API */

router.get('/api', (req, res, next) => {
  res.send('<i>Hello! Thanks for visiting.</i>')
})

router.get('/api/greetings', (req, res, next) => {
  Greeting.find((err, greetings) => {
    if (err)
      return res.status(500).send({
        success: false,
        error: err.message
      })
    
    res.send({
      success: true,
      data: greetings
    })
  })
})

router.get('/api/greetings/:_id', (req, res, next) => {
  Greeting.findById(req.params._id, (err, greeting) => {
    if (err | !greeting)
      return res.status(404).send({
        success: false,
        error: 'The greeting not found.'
      })
    
    res.send({
      success: true,
      data: greeting
    })
  })
})

router.post('/api/greetings', (req, res, next) => {
  Greeting.create({
    to_first_name: req.body.to_first_name,
    to_last_name: req.body.to_last_name,
    from_first_name: req.body.from_first_name,
    from_last_name: req.body.from_last_name,
    message: req.body.message
  }, (err, greeting) => {
    if (err)
      return res.status(500).send({
        success: false,
        error: err.message
      })
    
    res.send({
      success: true,
      data: greeting
    })
  })
})

/*
router.patch('/api/greetings/:_id', (req, res, next) => {
  Greeting.findById(req.params._id, (err, greeting) => {
    if (err | !greeting)
      return res.status(404).send({
        success: false,
        error: 'The greeting is not found.'
      })

    greeting.payment_token = req.body.payment_token
    greeting.paid = true

    greeting.save((err) => {
      if (err)
        return res.status(500).send({
          success: false,
          error: 'The greeting could be not be updated. Please try again.'
        })
      
      res.send({
        success: true,
        data: greeting
      })
    })
  })
})
*/

router.delete('/api/greetings/:_id', (req, res, next) => {
  Greeting.findByIdAndRemove(req.params._id, (err, greeting) => {
    if (err | !greeting)
      return res.status(404).send({
        success: false,
        error: 'The greeting not found.'
      })
    
    res.send({
      success: true,
      data: greeting
    })
  })
})

/* Front End */

router.get('/', (req, res, next) => {
  let now = new Date().getDate()
  let dayName
  if (now < 7) dayName = Greeting.days[0]
  else if (now > 14) dayName = Greeting.days[6]
  else dayName = Greeting.days[now-7]

  res.render('create', {
    to_first_name: "Juliet",
    to_last_name: "Kaur",
    from_first_name: "Romeo",
    from_last_name: "Kapoor",
    message: "I've fallen in love many times...Always with you. Happy " + dayName + " Day!"
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

module.exports = router;
