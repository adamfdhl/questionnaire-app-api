const mongoose = require("mongoose")

const questionnaireSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer_options: [{
    type: String,
    required: true
  }],
  correct_answer_idx: {
    type: Number
  }
})

const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema)

module.exports = Questionnaire