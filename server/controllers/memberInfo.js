// Global variables for our prototype
// Orders array for storing and manipulating orders
var memberInfo = [];
// Used to assign unique ids to each order
var primaryId = 1;

exports.findAll = (req, res) => {
    res.status(200).send(memberInfo);
}

exports.create = (req, res) => {
    // req.body now represents the actual request body
    // as a javascript object
    // memberInfo.push({
    //     id: primaryId,
    //     customer_name: `${req.body.firstname + ' ' + req.body.lastname}`,
    //     address: req.body.address,
    //     city: req.body.city,
    //     state: req.body.state,
    //     zip: req.body.zip
    // });
    // primaryId++;

    res.status(200).json({
        message: "Order created succesfully"
    })
}

exports.delete = (req, res) => {
    res.send('delete members');
}

exports.findOne = (req, res) => {
   res.send('members by id');
}