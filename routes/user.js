const router = require("express").Router();
const { json } = require("body-parser");
let User = require("../models/user.model");

router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json({ Error: err }));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({Error: err}))
})

router.route("/add").post((req, res) => {
	const username = req.body.username;
	const newUser = new User({ username });
	newUser
		.save()
		.then(() => res.json({ text: "User added!" }))
		.catch((err) => res.status(400).json({ Error: err }));
});

router.route("/answer").post((req, res) => {
  const username = req.body.username
  const answers = req.body.userAnswer
  const total_point = req.body.totalScore
  const newUser = new User({username, answers, total_point})
  newUser
		.save()
		.then(() => res.json({ text: "User added!" }))
		.catch((err) => res.status(400).json({ Error: err }));
})

module.exports = router;
