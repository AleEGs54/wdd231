const forecastContainer = document.getElementById("forecast-info"); //container

function displayForecastData(forecastData){
    //Get the data from the API divided in parts

    const forecastList = forecastData.list;
    console.log(forecastList);

    //Each 8 items a new day is showed, so we can divide the list by 8 to get the forecast for each day
    const forecastDaily= forecastList.filter((item, index) => index % 8 === 0);

    //Now, we use only the first 3 days
    const forecast = forecastDaily.slice(0, 3);
    console.log(forecast);

    //Iterate over each day and display the data
    forecast.forEach(item => {
        const aForecast = document.createElement("p");
        const day = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });

        //Inseting the info
        aForecast.innerHTML = `<strong>${day}</strong> ${item.main.temp} °C`;

        //Appending the info to the container
        forecastContainer.appendChild(aForecast);

    });
    
}

export default displayForecastData;