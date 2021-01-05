const foundNumbers = [];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle() {
  
  let newId = randomInteger(1, 15);
  console.log(newId);
  
  foundNumbers.push(newId)
  console.log(foundNumbers)
  console.log(foundNumbers, newId)
  for(let i = 0; i <= foundNumbers.length; i++){
    if(newId != foundNumbers[i]){
      fetch(`http://localhost:5050/api/users/${newId}`, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        console.log(data)
      let cardContainer = document.getElementById("user-cards");
      let userContainer = []
      userContainer.push(data)
      var userCard = userContainer.map((userInfo) => {
        return `
            <div class="card mb-5">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${userInfo.image}" class="card-img" alt="${userInfo.firstName}_profile_pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="font-family: 'Poiret One', cursive;">
                    <h5 id="user-fullname" class="card-title">${userInfo.firstName + " " + userInfo.lastName}</h5>
                    <div class="user-vitals">
                      <div id="user-vitals" class="row">
                        <h5>${userInfo.age + " " + userInfo.city + " " + userInfo.state}</h5>
                      </div>
                    </div>
                    <p id="user-bio" class="card-text">${userInfo.bio}</p>
                  </div>
                </div>
              </div>
            </div>
        `
      });
      cardContainer.innerHTML = userCard.join(" ");
      })
      .catch(e => {
        console.log(e);
        return e;
      })
    }else{
      return
    }
  }
}
// end user-cards function 
