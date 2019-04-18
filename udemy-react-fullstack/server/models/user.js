const mongoose = require('mongoose')
const { Schema } = mongoose // equivalent to const Schema = mongoose.Schema - called 'destructuring'

const userSchema = new Schema({
  googleID: String
})

mongoose.model('users', userSchema)
