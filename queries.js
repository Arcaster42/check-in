const db = require('./knex')

const registerAccount = (data) => {
    db('accounts').insert({
        name: data.username,
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName
    }).then((data) => {return data})
}

module.exports = { registerAccount }