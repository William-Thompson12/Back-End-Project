// this function will render user cards to the screen 
function shuffle() {

    let cardContainer = document.getElementById("user-cards");
    const fakeDb = [0];
  
    var userCard = fakeDb.map((userInfo) => {
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
    console.log(userCard);
  };
// end user-cards function 