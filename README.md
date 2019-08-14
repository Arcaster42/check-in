# Check-In Webapp Prototype
**This was created during my time as a student at Code Chrysalis**

Check-In is an social saftey application designed to give you security when going out to meet new people or to enjoy new places. Using a simple authentication system, you can set a check-in interval along with personal contact information and a detailed message in case you miss your check-in time.

## Technologies

Check-In uses a Node/Express server framework for the back-end along with the Knex database library and a Postgres server. Vue/Vuex are used for the front-end.

## Application Flow

- Splash screen transitions to login
- Register button takes you to a registration form
- Upon successful registration, the login screen is displayed
- Upon successful login, the check-in hub is displayed
- From you, you can create a new check-in, check in, or end a check-in

## Current State

The application is a fully function prototype but is currently designed for strictly correct usage. Data validation, error handling, and edge cases are minimally handled.

## Project Setup

Fork and clone the files, then install dependencies. Scripts are available to run either back-end or front-end, and these can be run simultaneously. Hot-reloading is pre-configured for both. Provide the necessary variables in the Knex files or using your local .env file. Migrate to prepare the database.
```
yarn install
yarn migrate
```
Rollbacks are available as well.
```
yarn rollback
```

### Compiles and hot-reloads for development
```
yarn run backend //express server, api
yarn run frontend //vue-vuex
```

### Compiles and minifies for production
```
yarn run build
```

## Planned Features

- Family & Friend account sharing to allow others to see your status
- Account controls to edit details or delete accounts
- Automated outgoing messaging on missed check-ins
- GPS location storage for last known location
- Notifications for check-in deadlines nearing

## Future Plans

This project is intended to serve as a proof-of-concept for a mobile application for iOS and Android systems to be released at a later time.

## Author
Created as part of a solo project by TJ Epperson.<br/>
[Website](tjepperson.com)<br/>
[GitHub](github.com/arcaster42) 