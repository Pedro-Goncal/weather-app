// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const weatherPromise = fetch(URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;

  getWeatherData(city)
    .then((response) => {
      console.log(response);
      showWeatherData(response);
    })
    .catch((error) => console.log(error));
};

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerHTML = weatherData.name;

  document.getElementById("lat").innerHTML = weatherData.coord.lat;
  document.getElementById("lon").innerHTML = weatherData.coord.lon;

  document.getElementById("weather-type").innerHTML =
    weatherData.weather[0].main;

  document.getElementById("temp").innerHTML = weatherData.main.temp;
  document.getElementById("feels").innerHTML = weatherData.main.feels_like;
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
  document.getElementById("humidity").innerHTML = weatherData.main.humidity;
};
