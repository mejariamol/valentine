var express = require('express')
var router = express.Router()

var Greeting = require('../models/greeting')

/* API */

router.get('/', (req, res, next) => {
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

router.get('/:_id', (req, res, next) => {
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

router.post('/', (req, res, next) => {
  Greeting.create({
    to_first_name: req.body.to_first_name,
    to_last_name: req.body.to_last_name,
    from_first_name: req.body.from_first_name,
    from_last_name: req.body.from_last_name,
    bg_path: req.body.bg_path,
    bg_color: req.body.bg_color,
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
router.patch('/:_id', (req, res, next) => {
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

router.delete('/:_id', (req, res, next) => {
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

module.exports = router