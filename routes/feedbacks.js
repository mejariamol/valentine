var express = require('express')
var router = express.Router()

var Feedback = require('../models/feedback')

/* API */

router.get('/', (req, res, next) => {
    Feedback.find((err, feedbacks) => {
        if (err)
            return res.status(500).send({
                success: false,
                error: err.message
            })
        
        res.send({
            success: true,
            data: feedbacks
        })
    })
})

router.post('/', (req, res, next) => {
    Feedback.create({
        rating: req.body.rating,
        comment: req.body.comment
    }, (err, feedback) => {
        if (err)
            return res.status(500).send({
                success: false,
                error: err.message
            })
        
        res.send({
            success: true,
            data: feedback
        })
    })
})

module.exports = router