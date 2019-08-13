const db = require('./knex')
const bcrypt = require('bcrypt')

const registerAccount = (data) => {
    console.log(`registerAccount received ${data}`)
    return db('accounts')
        .where('username', data.username)
        .then((query) => {
            if (query.length < 1) {
                bcrypt.hash(data.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        db('accounts').insert({
                            username: data.username,
                            email: data.email,
                            first_name: data.firstName,
                            last_name: data.lastName,
                            phone: data.phone,
                            pass_hash: hash
                        }).then(() => {return 'Registered'})
                    }
                })
            } else {
                console.log('Taken')
                return 'Taken'
            }
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

const login = async (data) => {
    return db('accounts')
        .where('username', data.username)
        .then(async (results) => {
            let returnValue = {}
            if (results.length > 0) {
                const user = results[0]
                return new Promise((resolve, reject) => {
                    bcrypt.compare(data.password, user.pass_hash, (err, valid) => {
                        if (err) {
                            reject({err: 'Comparison Error'})
                        }
                        if (valid) {
                            resolve(user)
                        }
                        if (!valid) reject({err: 'Invalid Credentials'})
                    })
                })
            } else {
                console.log('Account Not Found')
                return {err: 'Account Not Found'}
            }
        })
    }

module.exports = { registerAccount, login }