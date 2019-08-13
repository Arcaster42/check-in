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
    console.log(`POST account received ${req.body}`)
    registerAccount(req.body)
    .then((result) => res.send(result))
})

app.post('/api/login', (req, res) => {
    console.log(`POST login received ${req.body}`)
    login(req.body)
    .then((result) => {
        console.log('inside then')
        res.send(result)
    })
    .catch((err) => res.send(err))
    
    // login(req.body).then((val) => {
    //     console.log('res.send invoked')
    //     console.log(val)
    //     res.send(val)
    // })
})

app.listen(port, () => console.log(`Listening on ${port}`))