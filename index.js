const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./src/router.js')

dotenv.config()

const port = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome'))
app.get('/home', (req, res) => res.send('Welcome home'))


app.use('/api/email', router)

app.listen(port, () => console.log('Connecting to port: ' + port))
