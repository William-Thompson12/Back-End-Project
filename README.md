# Crushn'/ Back-End-Project 
## Summary:
 Tired of being lonely? In need of some human interaction? Look no further then Crushn'! Create a profile, select a distance, choose what tags and traits are specific to you. All that's left to do is hit that button and get Crushn'! *We are not liable for any bad dates*
 
## Our Team:
  ### Jason Wilger:
    Contact
      -LinkedIn: www.linkedin.com/in/jason-wilger
      -Email: Jkw500@gmail.com
  ### William Thompson:
    Contact
      -LinkedIn: www.linkedin.com/in/william-thompson12
      -Email: Thompsonwilliam729@gmail.com
  ### Andre Davis:
    Contact
      -Email: andre@andrejdavis.com
    My Responsibilities
      -Matching Logic
## Repository Contents: 
  -Server.js: Holds the express server 
  -App: Within app we stored config, controllers, models, and routes which hook up with our data-base.
  -Public: Public static files held on the server. 
  -Views: Containts home, profile and signup pages. All with partials rendered with EJS.
  
## Features & How they work:

  // Retrieve a single Users with id
  router.get("/:id", users.findOne);
   -Shuffle() "Matching with another user" calls a GET request to the db a returns a user.
   -findUser() "Matches profile information based on user id" calls a GET request to the db
   
  // Create a new User
  router.post("/", users.findAndCreate);
   -submitSignup() "takes information from the form and post as an object" POST newUser to db.
   
  // Delete a Users with id
  router.delete("/:id", users.delete);
   -deleteUser() "Finds user by id and deletes"
   
  // Login routes
  router.post("/login",users.login) "Uses bcrypt to hash the passwords and then on login checks hash passwords"
  router.post("/login/verify",auth.authenticateUser) "Verify user is logged in"
  
  // Posting an img
  router.post('/image-upload',auth.authenticateUser(), users.updateImage) Upload image to database and amazon s3
  
 
