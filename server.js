const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const cors = require("cors");
const axios = require('axios')
// Routes here

const app = express();

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

//Allows request from localhost:5050
var corsOptions = {
  origin: "http://localhost:5050"
};

// const db = require("./app/models");
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//EJS Routes

// Index page
app.get('/', function(req, res) {
  res.render('home/index.ejs');
});
// Signup page
app.get('/signup', function(req, res) {
  res.render('signup/signup.ejs');
});
// Profile Page
app.get('/profile', function(req, res) {
  res.render('profile/profile.ejs');
});
// About Page
app.get('/about', function(req, res) {
  res.render('about/about.ejs');
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});