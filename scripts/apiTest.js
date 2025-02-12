// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=92c8ca0ac089a625e28705389924fc24';

// async function apiFetch(url) {
//     try {
//         const response = await fetch(url);

//         if (response.ok){

//             const data = await response.json();
//             console.log(data);

//             displayResults(data);

//         } else {
//             throw new Error(await  response.text());
//         }

//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// function displayResults(weatherData) {
//     currentTemp.textContent = `${weatherData.main.temp}°C`;
//     //Since there can be multiple weathers, we need to specify the first one [0] which is the main weather in the array of weathers.
//     weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
//     captionDesc.textContent = `${weatherData.weather[0].description}`;
// }

// apiFetch(url);

//Fecth the API

// const apiUrl = 'https://opencritic-api.p.rapidapi.com/game/popular';

// async function apiFetch(url) {
//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
//         'x-rapidapi-key': '972ce4e446mshf048323eeb48952p174608jsnc1c70e3380a1'
//       }
//     });
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // testing only
//       // displayResults(data); // uncomment when ready

//       displayResults(data)

//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiFetch(apiUrl);

function displayResults(data) {
  // const imgEle = document.querySelector("#game-logo");
  // const nameGame = document.querySelector("#name-game");

  // nameGame.textContent = `${data[1].name}`,

  // imgEle.src = `https://img.opencritic.com/${data[24].images.box.og}`;
  // imgEle.width = '800';
  // imgEle.height = '1200';

  const objectLenght = (Object.keys(data).length);

  const main = document.querySelector("main");

  // data.forEach(game => {

  //   const image = document.createElement("img");
  //   const gameName = document.createElement("p");

  //   gameName.textContent = game.name;
  //   image.src =`https://img.opencritic.com/${game.images.box.og}`;
  //   image.width = "200";

  //   main.appendChild(image);
  //   main.appendChild(gameName);

  // });

  
  let totalIndex = 0

  for(let counter = 1; counter <= 3; counter++){
    const container = document.querySelector(`.container-${counter}`)

    for (let index = 0; index < Math.floor(objectLenght / 3); index++) {

      const image = document.createElement("img");
      const gameName = document.createElement("p");

      gameName.textContent = data[totalIndex].name;
      image.src = `https://img.opencritic.com/${data[totalIndex].images.box.og}`;
      image.width = "200";

      container.appendChild(image);
      container.appendChild(gameName);

      main.appendChild(container);

      totalIndex++

    }


  }







}
