/***** Beginning of Starter Code ****/
document.addEventListener('DOMContentLoaded', function(e){
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

        // add like event listener to each button as player is created

    //   const likeButton = playerDiv.querySelector('button')
    //   const like = likeButton.parentNode.querySelector('p.likes')
    //   likeButton.addEventListener('click', function(e){
    //         let likeNumber = parseInt(like.innerText.split(" ")[0]);
    //         // debugger
    //         likeNumber += 1;
    //         like.innerText = `${likeNumber} likes`;
    //     });
    
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
    
    header.addEventListener('click', function(e){
        toggleColor(header)
    })
    
    
    /***** Deliverable 2 *****/

    
    // first find the form that we will be submitting the new player values to . next add an event listener to the form for when we submit it. We don't want to reload the page so we can use e.preventDefault(). Next we want to create a player object with the data passed into the form. we get this data by getting the values of the form inputs via their names. now run this player object through the renderPlayer method to actually create the HTML to put the player in the DOM
  

    function createNewPlayer(){
        const newPlayerForm = document.querySelector("#new-player-form")
        newPlayerForm.addEventListener('submit', function(e){
            //once we submit we first want to get all player data and create an object. then we want to pass this player object to renderPlayer so that it will actually create the HTML to show our player
            e.preventDefault()
            let player = {
                number: `${newPlayerForm.number.value}`,
                name: `${newPlayerForm.name.value}`,
                nickname: `${newPlayerForm.nickname.value}`,
                photo: `${newPlayerForm.photo.value}`,
                likes: 1000,
            };
            renderPlayer(player)
        });
    }
   
    /***** Deliverable 3 *****/
    
    // first get all like buttons. This returns a node list which we can iterate though. For each button in this node list we want to locate where it is actually displayin the likes. next we want to add an event listener for when we click the button. we can get the number of likes from the innerText of the p element and split/parse it to get a number which we can then increment and rerender.

    // function addLike(){
    //     const likeButtons = document.querySelectorAll('.like-button')
    //     for(let button of likeButtons){
    //         const like = button.parentNode.querySelector('p.likes')
    //         button.addEventListener('click', function(e){
    //             let likeNumber = parseInt(like.innerText.split(" ")[0]);
    //             likeNumber += 1;
    //             like.innerText = `${likeNumber} likes`;
    //         });
    //     };
    // }
    
    function addLike(){
        const div = document.querySelector('.player-container')
        div.addEventListener('click', function(e){
            if(e.target.className === 'like-button'){
                const likes = e.target.parentNode.querySelector('p')
                let likeNumber = parseInt(likes.innerText.split(" ")[0]);
                // debugger
                likeNumber += 1;
                likes.innerText = `${likeNumber} likes`;
                    // debugger
            }
        // debugger
       }) ;
    // const likeButtons = document.querySelectorAll('.like-button')
    // for(let button of likeButtons){
    //     const like = button.parentNode.querySelector('p.likes')
    //     button.addEventListener('click', function(e){
    //         let likeNumber = parseInt(like.innerText.split(" ")[0]);
    //         likeNumber += 1;
    //         like.innerText = `${likeNumber} likes`;
    //     });
    // };
}
    

    createNewPlayer()
    addLike()
})
