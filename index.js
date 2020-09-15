/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")
const header = document.querySelector("#header")


// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

// header.addEventListener('click', function(e){
//     const header = e.target
//     if(header.style.color === 'red'){
//         header.style.color ="black"
//     } else {
//         header.style.color = "red"
//     }
// });

header.addEventListener('click', function(e){
    toggleColor(header)
})


/***** Deliverable 2 *****/

    const newPlayerForm = document.querySelector("#new-player-form")
    newPlayerForm.addEventListener('submit', function(e){
        //once we submit we first want to get all player data and create an object. then we want to pass this player object to renderPlayer so that it will actually create the HTML to show our player
        e.preventDefault()
        console.log(newPlayerForm.name.value)
        // console.log(e)
        let player = {
            number: `${newPlayerForm.number.value}`,
            name: `${newPlayerForm.name.value}`,
            nickname: `${newPlayerForm.nickname.value}`,
            photo: `${newPlayerForm.photo.value}`,
            likes: 1000,
        };
        renderPlayer(player)
    });
    
//  console.log(player)


// renderPlayer(getPlayerInfo)

//upon clicking we want to get this info and make this person. then we want to run this person through the renderPlayer



/***** Deliverable 3 *****/
