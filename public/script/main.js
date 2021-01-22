function signIn(){

}

function signOut(){

}

document.addEventListener('DOMContentLoaded', function(){
  try{
    document.getElementById('sign-inButton').addEventListener('click', signIn);
    if(document.getElementById('userCheck') == null || undefined) {
      findUser();
      document.getElementById('updateImg').addEventListener('click', updateImage)
      document.getElementById('updateButton').addEventListener('click', updateUser);
    }
  }catch(e){
    console.log(e)
    if(document.getElementById('userCheck') == null || undefined) {
      findUser();
      document.getElementById('updateImg').addEventListener('click', updateImage)
      document.getElementById('updateButton').addEventListener('click', updateUser);
    }else{
      document.getElementById('submit-button').addEventListener('click', submitSignup);
    }
  }
  
});

async function submitSignup(e) {
  e.preventDefault();
  // console.log(document.getElementById('fileToUpload').value)

  let email = document.getElementById('inputEmail').value;
  let password = document.getElementById('inputPassword').value;
  let gender = document.getElementById('userGender').value;
  let city = document.getElementById('inputCity').value;
  let age = document.getElementById('inputAge').value;
  let firstName = document.getElementById('inputFirst').value;
  let lastName = document.getElementById('inputLast').value;
  let prefrence = document.getElementById('userPrefrence').value;
  let state = document.getElementById('inputState').value;
  
  var newUser = {
    'email': email,
    'password': password,
    'gender': gender,
    'city': city,
    'age': age,
    'firstName': firstName,
    'lastName': lastName,
    'prefence': prefrence,
    'state': state,
  }

  await fetch("http://localhost:5050/api/users/", {method: 'POST', body: JSON.stringify(newUser), headers: {"Content-type": "application/json; charset=UTF-8"}})
  .then(response => response.json())
  .then(data => {
    document.getElementById('error-message').innerHTML = `Thanks ${firstName}, your account was successfully created! Return to home and sign-in`
  })
  .catch(document.getElementById('error-message').innerHTML = "Email already belongs to a user")
}

//Finds User
function findUser() {
  console.log('function ran')
  // Specific User Id from log in.
  fetch("http://localhost:5050/api/users/2", {method: 'GET'})
  .then(response => response.json())
  .then(data => {
  //Set Profile to Users Data
  document.getElementById('user-fullname').innerHTML = `${data.firstName + " " + data.lastName}`;
  document.getElementById('user-age').innerHTML = `${data.age}`
  //City & State
  document.getElementById('user-city').innerHTML = `${data.city}`
  document.getElementById('user-state').innerHTML = `${data.state}`
  document.getElementById('user-bio').innerHTML = `${data.bio}`
  //Connect with imgur
  document.getElementById('pic-container').innerHTML = `<img id="profile-picture" src="${data.image}" alt="profile-picture">`
  })
  .catch(e => {
    console.error(e);
  });
}

function updateImage(e) {
  e.preventDefault();
  const files = document.getElementById('fileToUpload').files;
  const file = files[0];
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  else{
    fetch('http://localhost:5050/api/users/image-upload', {method: 'POST', body: file, headers: {"Content-type": "application/json; charset=UTF-8"}}
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    }))
  }
  
}

// Updates User
async function updateUser(e) {
  e.preventDefault();
  let state = document.getElementById('updateState').value;
  let city = document.getElementById('updateCity').value;
  let bio = document.getElementById('updateBio').value;
  let newBio = document.getElementById('user-bio').value;
  let newCity = document.getElementById('user-city').value;

  var updatedUser = {
    'state': state,
    'city': city,
    'bio': bio
  };
  console.log(bio, city, state);
  //stops from sending empty values
  if (updatedUser.city && updatedUser.bio === null || undefined) {
    console.log('Both are empty moving on')
    let updatedUser = {
      'bio': newBio,
      'city': newCity,
      'state': state
    };    
    await fetch("http://localhost:5050/api/users/1", {method: 'PUT', body: JSON.stringify(updatedUser), headers: {"Content-type": "application/json; charset=UTF-8"}})
    .then(response => response.json())
    .then(data => {
      document.getElementById('error-message').innerHTML = `Updated User Successfully`
    })
    .catch(e => {
      document.getElementById('error-message').innerHTML = `Couldn't Update User ${e}`
      })
    return
  }
  else if(updatedUser.city === null) {
    console.log('City is empty moving on')
    let updatedUser = {
      'bio': bio,
      'city': newCity,
      'state': state
    };    
    await fetch("http://localhost:5050/api/users/1", {method: 'PUT', body: JSON.stringify(updatedUser), headers: {"Content-type": "application/json; charset=UTF-8"}})
    .then(response => response.json())
    .then(data => {
      document.getElementById('error-message').innerHTML = `Updated User Successfully`
    })
    .catch(e => {
      document.getElementById('error-message').innerHTML = `Couldn't Update User ${e}`
      })
    return
  }else if(updatedUser.bio === null){
    console.log('Bio is empty moving on')
    let updatedUser = {
      'bio': newBio,
      'city': city,
      'state': state
    };    
    await fetch("http://localhost:5050/api/users/1", {method: 'PUT', body: JSON.stringify(updatedUser), headers: {"Content-type": "application/json; charset=UTF-8"}})
    .then(response => response.json())
    .then(data => {
      document.getElementById('error-message').innerHTML = `Updated User Successfully`
    })
    .catch(e => {
      document.getElementById('error-message').innerHTML = `Couldn't Update User ${e}`
      })
    return;
  } else {
    //Send user data to DB
    await fetch("http://localhost:5050/api/users/1", {method: 'PUT', body: JSON.stringify(updatedUser), headers: {"Content-type": "application/json; charset=UTF-8"}})
    .then(response => response.json())
    .then(data => {
      document.getElementById('error-message').innerHTML = `Updated User Successfully`
    })
    .catch(e => {
    document.getElementById('error-message').innerHTML = `Couldn't Update User ${e}`
    })
  }
}

function deleteUser() {
  //Sends a request to delete user
  fetch("http://localhost:5050/api/users/1", {method: 'DELETE',});
}

$("#dialogBtn").on("click", dialog.bind(this, 'Are you Sure?'));

function dialog(message) {
      var modal = $("#modal_dialog");
      modal.show();
      $('.title').html(message);
            
      $('#dialogBtnYes').off("click").on("click", function() {
           modal.hide()
           deleteUser()
      });
      $('#dialogBtnNo').off("click").on("click", function() {
            modal.hide()
      });
}



