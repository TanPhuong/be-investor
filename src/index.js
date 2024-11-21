const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./router.js')

dotenv.config()

const port = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/email', router)

app.listen(port, () => console.log('Connecting to port: ' + port))
