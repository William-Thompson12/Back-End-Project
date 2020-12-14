// this function will render user cards to the screen 
function shuffle() {

    let cardContainer = document.getElementById("user-cards")

    console.log(cardContainer);
  
    const fakeDb = [0];
  
    var userCard = fakeDb.map((userInfo) => {
      return `
          <div class="card mb-5 offset-3" style="max-width: 600px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="..." class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body" style="font-family: 'Poiret One', cursive;">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">Bio</p>
                  <h4><span id="tags" class="badge badge-secondary">tags</span></h4>
                  <a href="#" class="btn text-danger offset-8">View Profile</a>
                </div>
              </div>
            </div>
          </div>
      `
    });
  
    cardContainer.innerHTML = userCard.join(" ")
    console.log(userCard);
  };
// end user-cards function 