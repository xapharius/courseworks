const passport = require('passport') // has been configured in index by importing services/passport.js

// create a function that takes app as an arg and assignes routes to it.
module.exports = app => {
  // my authentication page, which will redirect the user to google
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )

  // the callback page with the google code, passport will then request the user info using code
  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })
}
