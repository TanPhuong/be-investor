const express = require('express')
const { sendEmailController } = require('./EmailService')

const router = express.Router()

router.post('/send-email', sendEmailController)

module.exports = router