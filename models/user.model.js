const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    default: []
  },
  total_point: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User