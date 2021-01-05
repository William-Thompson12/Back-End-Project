module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const auth = require("../middlewares/auth")
    const router = require("express").Router();
    const upload = require('../services/fileUpload')
    
  
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

    router.post("/login",users.login)

    router.post("/login/verify",auth.authenticateUser,users.verifyLoggedIn)

    router.post('/image-upload',upload.single('image'), function(req,res) {
      return res.json({'imageUrl':req.file.location});
  })
    
    router.post("")

    
  
    app.use('/api/users', router);
  };
