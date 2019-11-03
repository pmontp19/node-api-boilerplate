const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  picture: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: String

}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User

// TODO password
// TODO Avatar picture from GRAVATAR?