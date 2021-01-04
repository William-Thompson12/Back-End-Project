// var pg = require('pg');
// var client = new pg.Client("postgres://subtvjqa:8xFFyyqZHwfT9XAGrJK3zf3WXS7lG6c5@suleiman.db.elephantsql.com:5432/subtvjqa");

function signOut(){

}

document.addEventListener('DOMContentLoaded', function(){
  try {
    document.getElementById('submit-button').addEventListener('click', submitSignup);
  } catch(e) {
    console.log('submit button not found moving on');
    findUser();
  }
});

function submitSignup(e) {
  e.preventDefault();
  let email = document.getElementById('inputEmail').value;
  let password = document.getElementById('inputPassword').value;
  let zip = document.getElementById('inputZip').value;
  let gender = document.getElementById('userGender').value;
  let city = document.getElementById('inputCity').value;
  let age = document.getElementById('inputAge').value;
  let firstName = document.getElementById('inputFirst').value;
  let lastName = document.getElementById('inputLast').value;
  let prefrence = document.getElementById('userPrefrence').value;
  let state = document.getElementById('search-radius').value;
  
  var newUser = {
    'email': email,
    'password': password,
    'zip': zip,
    'gender': gender,
    'city': city,
    'age': age,
    'firstName': firstName,
    'lastName': lastName,
    'prefence': prefrence,
    'state': state,
  }
  console.log(newUser);
  fetch("http://localhost:5050/api/users/", {method: 'POST', body: JSON.stringify(newUser), headers: {"Content-type": "application/json; charset=UTF-8"}});
}

function createTags(user) {

}

//Finds User
function findUser() {
  console.log('function ran')
  // Specific User Id from log in.
  fetch("http://localhost:5050/api/users/2", {method: 'GET'})
  .then(response => response.json())
  .then(data => {
  console.log(data)
  })
  .catch(e => {
    console.log(e);
    return e;
  });

  //Set Profile to Users Data
  document.getElementById('user-fullname').innerHTML = `${data.firstName + " " + data.lastName}`;
  document.getElementById('user-age').innerHTML = `18`
  //City & State
  document.getElementById('user-location').innerHTML = `${data.city + " " + data.state}`
  document.getElementById('user-bio').innerHTML = `bio`
  document.getElementById('tag-container').innerHTML = createTags()
  //Connect with imgur
  document.getElementById('pic-container').innerHTML = `<img id="profile-picture" src="${null}" alt="profile-picture">`

}

//Updates User
// function updateUser() {
//   //Get User
//   fetch("http://localhost:5050/api/users/:id", {method: 'GET'})
//   .then(response => response.json())
//   .then(data => {
//     //create copy of user
//     //let newUser = {...data}
//   })
  // .catch(e => {
  //   console.log(e);
  //   return e;
  // });
//   //Send user data to DB
//   fetch("http://localhost:5050/api/users/:id", {method: 'PATCH', body: updatedUser})

// }