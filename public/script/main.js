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