const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
// const cors = require("cors");

// Routes here

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//EJS Routes
//V V V V V V
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

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});