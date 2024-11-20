const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())

dotenv.config()

const routes = (app) => {
    app.use('/send-email', (req, res) => {
        const { email } = req.body
        
        
    })
}

app.listen(process.env.PORT, () => console.log('Connecting to port: ' + process.env.PORT))
