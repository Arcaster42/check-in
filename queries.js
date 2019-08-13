const db = require('./knex')
const bcrypt = require('bcrypt')

const registerAccount = (data) => {
    console.log(`registerAccount received ${data}`)
    return db('accounts')
        .where('username', data.username)
        .then((query) => {
            if (query.length < 1) {
                return new Promise((resolve, reject) => {
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
                                pass_hash: hash,
                                alarm_active: false
                            }).then(() => resolve(true))
                            .catch(() => reject({err: 'Database Error'}))
                        }
                    })
                })
            } else {
                return {err: 'Username Unavailable'}
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

const setUser = (user) => {
    console.log(user)
    return db('accounts')
        .where('username', user.username)
        .then((results) => {
            return results
        })
}

const insertTime = (user, time, message) => {
    return db('accounts')
        .where('username', user.username)
        .update({alarm_active: true, alarm_message: message, alarm_interval: time, alarm_creation: Date.now(), alarm_deadline: Date.now() + (60 * time * 1000)})
        .then(() => {
            return user
        })
}

const checkIn = (user) => {
    return db('accounts')
        .where('username', user.username)
        .update({alarm_creation: Date.now(), alarm_deadline: Date.now() + (60 * user.alarm_interval * 1000)})
        .then(() => {
            return user
        })
}

const safe = (user) => {
    return db('accounts')
        .where('username', user.username)
        .update({alarm_active: false})
        .then(() => {
            return user
        })
}

module.exports = { registerAccount, login, setUser, insertTime, checkIn, safe }