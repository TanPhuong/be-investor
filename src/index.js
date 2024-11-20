const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./router.js')

app.use(cors())

dotenv.config()

// const routes = (app) => {
// }
app.use('/api/email', router)

app.listen(process.env.PORT, () => console.log('Connecting to port: ' + process.env.PORT))
