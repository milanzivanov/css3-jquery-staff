"use strict";

searchButton.addEventListener("click", searchWeather);

function searchWeather() {

    loadingText.style.display = "block";
    weatherBox.style.display = "none";

    var cityName = searchCity.value;
    searchCity.value = "";
    if (cityName.trim().length === 0) {
        return alert("Enter city name!!!");
    }
    var http = new XMLHttpRequest();
    var apiKey = "cf4acfccaeb719f8f2992c4f80d2031b";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey;
    var method = "GET";

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase())
            weatherData.temperature = data.main.temp;
            // console.log(weatherData);
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            alert("error!!!");
        } 
    };
    http.send();
}


function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    // searchCity.value = "";

    loadingText.style.display = "none";
    weatherBox.style.display = "block";
};