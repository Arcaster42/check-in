const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static(__dirname + 'public'))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
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