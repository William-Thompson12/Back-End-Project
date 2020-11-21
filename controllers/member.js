// Global variables for our prototype
// Orders array for storing and manipulating orders
var members = [];
// Used to assign unique ids to each order
var primaryId = 1;

exports.findAll = (req, res) => {
    res.send('All members')
}

exports.create = (req, res) => {
    res.send('create members');
}

exports.delete = (req, res) => {
    res.send('delete members');
}

exports.findOne = (req, res) => {
   res.send('members by id');
}