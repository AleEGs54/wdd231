//storing the weather-info in a variable
const weatherInfo = document.querySelector('#weather-info');

function displayWeatherData(weatherData) {

    //Clearing the container
    weatherInfo.innerHTML = "";


    const temperature = weatherData.main.temp; //75f 
    const weatherDescription = weatherData.weather[0].description;
    const high = weatherData.main.temp_max; 
    const low = weatherData.main.temp_min; 
    const humidity = weatherData.main.humidity; 
    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', { 
        timeZone: 'America/Lima',
        hour: '2-digit',
        minute: '2-digit' }); 
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', { 
        timeZone: 'America/Lima', //Changing the timezone to Lima
        hour: '2-digit',
        minute: '2-digit' });


    //Building the weather card from within

    const card = document.createElement('section');
    const temperatureElement = document.createElement('p');
    const weatherElement = document.createElement('p');
    const highElement = document.createElement('p');
    const lowElement = document.createElement('p');
    const humidityElement = document.createElement('p');
    const sunriseElement = document.createElement('p');
    const sunsetElement = document.createElement('p');
    const iconElement = document.createElement('img');
    const weatherDescriptionElement = document.createElement('p');

    //Inserting the info
    temperatureElement.innerHTML = `<strong >Temperature: </strong> ${Math.floor(temperature)} °C`;
    weatherDescriptionElement.innerHTML = `<strong >Description: </strong> ${weatherDescription}`;
    highElement.innerHTML = `<strong >High: </strong> ${Math.floor(high)} °C`;
    lowElement.innerHTML = `<strong >Low: </strong> ${Math.floor(low)} °C`;
    humidityElement.innerHTML = `<strong >Humidity: </strong> ${humidity} %`;
    sunriseElement.innerHTML = `<strong >Sunrise: </strong> ${sunrise}`;
    sunsetElement.innerHTML = `<strong >Sunset: </strong> ${sunset}`;
    iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
    iconElement.setAttribute('alt', weatherData.weather[0].description);
    iconElement.setAttribute('width', '100px');
    iconElement.setAttribute('height', '100px');

    //Appending the info to the card
    card.appendChild(temperatureElement);
    card.appendChild(weatherDescriptionElement);
    card.appendChild(highElement);
    card.appendChild(lowElement);
    card.appendChild(humidityElement);
    card.appendChild(sunriseElement);
    card.appendChild(sunsetElement);
    
    weatherInfo.appendChild(iconElement);
    weatherInfo.appendChild(card);

}

export default displayWeatherData;