const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const userRoute = require("./routes/user")
const questionnaireRoute = require("./routes/questionnaire")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParserL: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established!")
})

app.use("/users", userRoute)
app.use("/questionnaire", questionnaireRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})