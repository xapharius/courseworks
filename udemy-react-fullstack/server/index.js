const express = require('express')
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
require('./models/user')
require('./services/passport') // passport.js is being executed and global vars attributed

mongoose.connect(keys.mongoURI)

const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
authRoutes(app) // assign the auth routes to the app object

const PORT = process.env.PORT || 5000
app.listen(PORT)
