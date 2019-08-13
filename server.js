const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

const { registerAccount, login, setUser, insertTime, checkIn, safe } = require('./queries')

app.get('/', (req, res) => {
    res.send(200)
})

app.get('/api', (req, res) => {
    res.send(200)
})

app.post('/api/user', (req, res) => {
    setUser(req.body.user)
    .then((result) => res.send(result))
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

app.post('/api/timer', (req, res) => {
    console.log(req.body)
    insertTime(req.body.user, req.body.time, req.body.message)
    .then((result) => {
        res.sendStatus(200)
    })
})

app.patch('/api/timer', (req, res) => {
    console.log(req.body)
    checkIn(req.body.user)
    .then((result) => {
        res.send(result)
    })
})

app.post('/api/timer/safe', (req, res) => {
    console.log(req.body)
    safe(req.body.user)
    .then((result) => {
        res.sendStatus(200)
    })
})

app.listen(port, () => console.log(`Listening on ${port}`))