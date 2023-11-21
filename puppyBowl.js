//2310-FSA-ET-WEB-FT-SF

const apiBaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`

const state = {
   allPlayers: []
}

const getAllPlayers = async () => {
   const response = await fetch(`${apiBaseUrl}/players`);
   const jsonResponse = await response.json();
   state.allPlayers = jsonResponse.data.players;
   renderAllPlayers();
}

const getPlayerDetails = async(id) => {
const response =  await fetch(`${apiBaseUrl}/players/${id}`)
const responseJson = await response.json();
   const playerDetails = responseJson.data
console.log(playerDetails)}


const renderAllPlayers = () => {

   playersNames = state.allPlayers.map((singlePlayers) => {
      return `<li id = '${singlePlayers.id}'>${singlePlayers.name}</li>`
   });
   const ol = document.createElement(`ol`)

   ol.innerHTML = playersNames.join(``);
   const main = document.querySelector(`main`);
   main.appendChild(ol);
   //console.log(main)
   const listItems = document.querySelectorAll(`li`);
   listItems.forEach((playerListItem) => {
      playerListItem.addEventListener(`click`, (event) => {
         console.log(event.target.id)
         getPlayerDetails(event.target.id)
      });

   });
}

getAllPlayers();