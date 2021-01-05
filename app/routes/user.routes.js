module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const auth = require("../middlewares/auth")
  
    var router = require("express").Router();
    const upload = require('../services/fileupload')
  
    // Create a new Users
    router.post("/", users.findAndCreate);
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    // Retrieve a single Users with id
    router.get("/:id", users.findOne);
  
    // Update a Users with id
    router.put("/:id", users.update);
  
    // Delete a Users with id
    router.delete("/:id", users.delete);

    //Checks Login
    router.post("/login",users.login)

    router.post("/login/verify",auth.authenticateUser)

    router.post('/image-upload',upload.single('image'), function(req,res) {
      return res.json({'imageUrl':req.file.location});
  })
    //Use before every route
    app.use('/api/users', router);
  };