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
  document.getElementById('submit-button').addEventListener('click', submitSignup)
})

function submitSignup(e) {
  e.preventDefault();
  let address = document.getElementById('inputAddress').value
  let zip = document.getElementById('inputZip').value
  let gender = document.getElementById('userGender').value
  let city = document.getElementById('inputCity').value
  let age = document.getElementById('inputAge').value
  let firstName = document.getElementById('inputFirst').value
  let lastName = document.getElementById('inputLast').value
  let prefrence = document.getElementById('userPrefrence').value
  let radius = document.getElementById('search-radius').value
  alert(address + ' - ' + zip + ' - ' + gender + ' - ' + city + ' - ' + age + ' - ' + firstName + ' - ' + lastName + ' - ' + prefrence + ' - ' + radius);
}