function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle() {
  
  let newId = randomInteger(1, 8);
  console.log(newId);
  fetch(`http://localhost:5050/api/users/${newId}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => {
      console.log(data)
    let cardContainer = document.getElementById("user-cards");
    var userCard = data.map((userInfo) => {
      return `
          <div class="card mb-5">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${userInfo.picture}" class="card-img" alt="${userInfo.firstName}_profile_pic">
              </div>
              <div class="col-md-8">
                <div class="card-body" style="font-family: 'Poiret One', cursive;">
                  <h5 id="user-fullname" class="card-title">${userInfo.firstName}</h5>
                  <p id="user-bio" class="card-text">${userInfo.lastName}</p>
                  <p id="user-location">${userInfo.city + " - " + userInfo.state }</p>
                  <div id="tag-container">${userInfo.tags}</div>
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
  }
// end user-cards function 
