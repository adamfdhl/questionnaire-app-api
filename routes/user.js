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
  const userId = req.body.userId
  const questId = req.body.questId
  const ansId = req.body.ansId
  User.findById(userId)
    .then((user) => {
      user.answers.push(ansId)
      user
        .save()
        .then(() => res.json({text: `User ${userId} updated!`}))
        .catch(err => res.status(400).json({Error: err}))
    })
    .catch(err => res.status(400).json({Error: err}))
})

module.exports = router;
