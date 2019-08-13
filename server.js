const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

const { registerAccount } = require('./queries')

app.get('/', (req, res) => {
    res.send(200)
})

app.get('/api', (req, res) => {
    res.send(200)
})

app.post('/api/account', (req, res) => {
    console.log(req.body)
    registerAccount(req.body)
})

app.listen(port, () => console.log(`Listening on ${port}`))