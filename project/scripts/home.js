import styleNavAndFooter from "./common-scripts.js";
import GB_API_KEY from "./apiKey.js";

styleNavAndFooter(); //To apply style to the nav and the footer

//Fecth the API

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
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready


      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch(apiUrl);



  