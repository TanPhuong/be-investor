const express = require('express')

const router = express.Router()

router.post('/send-email', sendEmailControlelr)

export default router