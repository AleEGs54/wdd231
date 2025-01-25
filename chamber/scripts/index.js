import displayWeatherData from "./weatherData.js";
import displayForecastData from "./forecast.js";
import displayMembers from "./members.js";
//Home 

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.13&lon=-77.03&units=metric&appid=92c8ca0ac089a625e28705389924fc24';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-12.13&lon=-77.03&units=metric&appid=92c8ca0ac089a625e28705389924fc24';
const urlMembers = 'data/members.json';

const cards = document.querySelector('.home-cards');

//async function
//fetching data from the API

async function getWeatherData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayWeatherData(data);
    
    // console.log(data);
}


getWeatherData(urlWeather);


async function getForecastData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    displayForecastData(data);

}  

getForecastData(urlForecast);


// fetching info from data json file

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
    
    // console.table(data.members);
}

getMemberData(urlMembers)



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options

});

// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;