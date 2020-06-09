const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds117061.mlab.com:17061/heroku_x9smfn8rs";
const PORT = 3030;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI);

//mongoose.connect("mongodb://localhost/workout", {
  //useNewUrlParser: true,
  //useFindAndModify: false
//});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});