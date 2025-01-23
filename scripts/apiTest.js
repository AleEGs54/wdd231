const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=92c8ca0ac089a625e28705389924fc24';

async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (response.ok){
            
            const data = await response.json();
            console.log(data);

            displayResults(data);

        } else {
            throw new Error(await  response.text());
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayResults(weatherData) {
    currentTemp.textContent = `${weatherData.main.temp}°C`;
    //Since there can be multiple weathers, we need to specify the first one [0] which is the main weather in the array of weathers.
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
    captionDesc.textContent = `${weatherData.weather[0].description}`;
}

apiFetch(url);