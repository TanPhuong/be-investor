const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./router.js')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/email', router)

app.listen(process.env.PORT, () => console.log('Connecting to port: ' + process.env.PORT))
