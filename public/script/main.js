function checkStatus(){
  //Checks Login Status
  if(status = true){
    // User is logged in
    shuffle();
  } else{
    // If User is not logged in
    var x = document.getElementById("myModal");
    if (x.style.display === "none") {          
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
  }
}

function signOut(){

}

document.addEventListener('DOMContentLoaded', function(){
  try {
    document.getElementById('submit-button').addEventListener('click', submitSignup);
  } catch(e) {
    console.log('submit button not found moving on');
  } finally {
    findUser();
  }
});

function submitSignup(e) {
  e.preventDefault();
  let address = document.getElementById('inputAddress').value;
  let zip = document.getElementById('inputZip').value;
  let gender = document.getElementById('userGender').value;
  let city = document.getElementById('inputCity').value;
  let age = document.getElementById('inputAge').value;
  let firstName = document.getElementById('inputFirst').value;
  let lastName = document.getElementById('inputLast').value;
  let prefrence = document.getElementById('userPrefrence').value;
  let radius = document.getElementById('search-radius').value;
  
  var newUser = {
    'address': address,
    'zip': zip,
    'gender': gender,
    'city': city,
    'age': age,
    'firstName': firstName,
    'lastName': lastName,
    'prefence': prefrence,
    'radius': radius,
  }
  fetch("http://localhost:5050/api/users/", {method: 'POST', body: newUser});
}

function createTags(user) {

}

//Finds User
function findUser() {
  //Specific User Id from log in.
  //fetch("http://localhost:5050/api/users/", {method: 'GET'})

  //Set Profile to Users Data
  document.getElementById('user-fullname').innerHTML = "My Full Name";
  document.getElementById('user-age').innerHTML = 'Test'
  //City & State
  document.getElementById('user-location').innerHTML =
  document.getElementById('user-bio').innerHTML = 
  document.getElementById('tag-container').innerHTML = createTags()
  //Connect with imgur
  document.getElementById('pic-container').innerHTML = `<img id="profile-picture" src="${null}" alt="profile-picture">`

}

//Updates User
function updateUser() {
  //Get User
  fetch("http://localhost:5050/api/users/:id", {method: 'GET'})
  .then(response => response.json())
  .then(data => {
    //create copy of user
    //let newUser = {...data}
  })
  //Send user data to DB
  fetch("http://localhost:5050/api/users/:id", {method: 'PUT', body: updatedUser})

}