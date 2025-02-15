import styleNavAndFooter from "./common-scripts.js";
import displayLogos from "./scrollLogos.js";
import displayGames from "./scrollGames.js";
import { displayMembershipCards } from './membershipModule.js';

styleNavAndFooter(); //To apply style to the nav and the footer

//Fecth the API for consoles

const apiUrl = "data/consoles.json";


async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        displayLogos(data);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch(apiUrl);


  //Fecth the API for games

  const apiUrl2 = 'data/games.json';

async function apiFetch2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      displayGames(data)

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch2(apiUrl2);


async function loadMembershipData(urlMembership) {
  try {
      const response = await fetch(urlMembership);
      if (!response.ok) {
          throw new Error(`Error al cargar los datos: ${response.statusText}`);
      }
      const data = await response.json();
      displayMembershipCards(data);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Call function to display data
loadMembershipData('data/membershipData.json');

