const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { default: router } = require('./router')

app.use(cors())

dotenv.config()

const routes = (app) => {
    app.use('/email', router)
}

app.listen(process.env.PORT, () => console.log('Connecting to port: ' + process.env.PORT))
