const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

const { registerAccount, login } = require('./queries')

app.get('/', (req, res) => {
    res.send(200)
})

app.get('/api', (req, res) => {
    res.send(200)
})

app.post('/api/account', (req, res) => {
    registerAccount(req.body)
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
})

app.post('/api/login', (req, res) => {
    login(req.body)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => res.send(err))
})

app.listen(port, () => console.log(`Listening on ${port}`))