require('dotenv').config()
const db = require("../../models/");
const user = require("../../models/user");
const User = db.User;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
global.SALT_ROUNDS = 10;

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
};

//route that creates new user from email signup
exports.findAndCreate = async (req,res) => {
 console.log(req.body)
  //checks if user already has an account
  let persistedUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if( persistedUser === null) {
    bcrypt.hash(req.body.password, SALT_ROUNDS, async (error, hash) => {
      const newUser = await User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:hash,
        gender:req.body.gender,
        preference: req.body.preference,
        city: req.body.city,
        state: req.body.state,
        img: req.body.img,
        bio: 'Add a bio!',
        age: req.body.age,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign(
        { email: savedUser.email,
          id: savedUser.id },
        process.env.SECRET_KEY
      );
      res.send({token})
    });
    } else {
      res.send("email already belongs to a user")
    }
};


// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id
  User.update({ 
    // what is being updated
    city: req.body.city,
    state: req.body.state,
    bio: req.body.bio,
    img: req.body.img,
  }, {
    where: {id : id},
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not Updated user with id=" + id + `${err}`
    });
  });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Account was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};

exports.login = async (req,res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email
      }
    })
    if(!existingUser) {
      res.send({error: "no user found with that email"})
    } else {
      //checking hash passwords
      const passMatching = await bcrypt.compare(password,existingUser.password);
      if (passMatching === true) {
        const token = jwt.sign(
          {
            email: existingUser.email, firstName: existingUser.firstName, lastName: existingUser.lastName
          },
          process.env.SECRET_KEY
        );
        res.json({token})
      } else {
        res.json({message: "wrong password"})
      }
    }
  } catch(e) {
    res.json({error: e})
  }
}

exports.verifyLoggedIn = async (req,res) => {
  res.send(req.user);
}