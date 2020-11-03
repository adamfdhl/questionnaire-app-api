const router = require("express").Router();
let Questionnaire = require("../models/questionnaire.model");

router.route("/").get((req, res) => {
	Questionnaire.find()
		.then((questionnaires) => res.json(questionnaires))
		.catch((err) => res.status(400).json({ Error: err }));
});

router.route("/add").post((req, res) => {
  const question = req.body.question
  const answer_options = req.body.answer_options
  const correct_answer_idx = req.body.correct_answer_idx
  const newQuestionnaire = new Questionnaire({question, answer_options, correct_answer_idx})
  newQuestionnaire
    .save()
    .then(() => res.json({text: "Question added!"}))
    .catch(err => res.status(400).json({Error: err}))
})

module.exports = router;
