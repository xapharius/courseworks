const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

// serialize based on the "internal" mongo record id, "external" not profile id.
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// deserialize user by taking the record id and querying for it
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // The user route after authentication
      proxy: true
    },

    // what to do after passport receives user info (after second call to google)
    async (accessToken, refreshToken, profile, done) => {
      // Any mongoose query is async and returns a promise, use .then or await
      const existingUser = await User.findOne({ googleID: profile.id })
      if (existingUser) {
        // record exists, mongoose model object returned
        return done(null, existingUser)
      }

      // no record found, mongoose returns null
      const user = await new User({ googleID: profile.id }).save()
      // first arg of done is err, second the return
      done(null, user)
    }
  )
)
