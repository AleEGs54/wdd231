import styleNavAndFooter from "./common-scripts.js";
import displayLogos from "./scrollLogos.js";
import GB_API_KEY from "./apiKey.js";
import displayGames from "./scrollGames.js";

styleNavAndFooter(); //To apply style to the nav and the footer

//Fecth the API for consoles

const apiUrl = `https://opencritic-api.p.rapidapi.com/platform`;

async function apiFetch(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
            'x-rapidapi-key': `${GB_API_KEY}`
        }
      });
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

  const apiUrl2 = 'https://opencritic-api.p.rapidapi.com/game/popular';

async function apiFetch2(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
        'x-rapidapi-key': '5ab75d584fmsh10d9489d1d854c7p1160cbjsnfc8f273a83e5'
      }
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      // displayResults(data); // uncomment when ready

      displayGames(data)

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch2(apiUrl2);
