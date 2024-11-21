const express = require('express')
const { sendEmailController } = require('./EmailService');

const router = express.Router();

router.post('/sendEmail', sendEmailController);

module.exports = router;