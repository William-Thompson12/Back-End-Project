const db = require("../models");
const User = db.Users;
const Op = db.Sequelize.Op;

// Fake Id for now
var primaryId = 1;
// Fake DB for now
const users = [
  {
    first_name: 'william',
    last_name: 'thompson',
    address: "random",
    city: 'seattle',
    zip: 98000,
    age: 18,
    searchRadius: 20
  },
]
// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (req.body.age < 18) {
        res.status(400).send({
          message: "Must Be 18 or Older!"
        });
        return;
      }
  // Create a User
  users.push({
    id: primaryId,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    age: req.body.age,
    prefence: req.body.prefence ? req.body.prefence : false,
    searchRadius: req.body.searchRadius
  });
  primaryId++;
  // Save User in the database
  // User.create(data)
  //   .then(data => {
  //     res.send(users);
  //   })
  res.status(200).send(users)
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
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
    const id = req.params.id;

    User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
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