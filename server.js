const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 
"mongodb://user1:Password1@ds031617.mlab.com:31617/heroku_f1b5gwht";
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