// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";
weekday[8] = "Monday";
weekday[9] = "Tuesday";
weekday[10] = "Wednesday";
weekday[11] = "Thursday";
weekday[12] = "Friday";

window.onload = function () {
  document.getElementById("weekday").innerHTML = weekday[d.getDay()];

  document.getElementById("day1").innerHTML = weekday[d.getDay() + 1];
  document.getElementById("day2").innerHTML = weekday[d.getDay() + 2];
  document.getElementById("day3").innerHTML = weekday[d.getDay() + 3];
  document.getElementById("day4").innerHTML = weekday[d.getDay() + 4];
  document.getElementById("day5").innerHTML = weekday[d.getDay() + 5];
  document.getElementById("day6").innerHTML = weekday[d.getDay() + 6];
};

getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
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
  const getIcon = (n) => {
    iconcode = weatherData.list[n].weather[0].icon;
    return iconcode;
  };

  //Weather Image
  document.getElementById("image").src =
    "http://openweathermap.org/img/w/" + getIcon(0) + ".png";

  //Weather Temp
  document.getElementById("temp").innerHTML = Math.floor(
    weatherData.list[0].main.temp
  );
  document.getElementById("weather-type").innerHTML =
    weatherData.list[0].weather[0].description;

  //Weather Desciption
  document.getElementById("city-name").innerHTML = weatherData.city.name;

  document.getElementById("lat").innerHTML = weatherData.city.coord.lat;
  document.getElementById("lon").innerHTML = weatherData.city.coord.lon;

  document.getElementById("feels").innerHTML =
    weatherData.list[0].main.feels_like;
  document.getElementById("min-temp").innerHTML =
    weatherData.list[0].main.temp_min;
  document.getElementById("max-temp").innerHTML =
    weatherData.list[0].main.temp_max;
  document.getElementById("humidity").innerHTML =
    weatherData.list[0].main.humidity;

  //Forecast Cards
  document.getElementById("forecast-temp1").innerHTML = Math.floor(
    weatherData.list[5].main.temp
  );
  document.getElementById("fImage1").src =
    "http://openweathermap.org/img/w/" + getIcon(5) + ".png";

  document.getElementById("forecast-temp2").innerHTML = Math.floor(
    weatherData.list[13].main.temp
  );
  document.getElementById("fImage2").src =
    "http://openweathermap.org/img/w/" + getIcon(13) + ".png";

  document.getElementById("forecast-temp3").innerHTML = Math.floor(
    weatherData.list[21].main.temp
  );
  document.getElementById("fImage3").src =
    "http://openweathermap.org/img/w/" + getIcon(21) + ".png";

  document.getElementById("forecast-temp4").innerHTML = Math.floor(
    weatherData.list[29].main.temp
  );
  document.getElementById("fImage4").src =
    "http://openweathermap.org/img/w/" + getIcon(29) + ".png";

  document.getElementById("forecast-temp5").innerHTML = Math.floor(
    weatherData.list[37].main.temp
  );
  document.getElementById("fImage5").src =
    "http://openweathermap.org/img/w/" + getIcon(37) + ".png";

  document.getElementById("forecast-temp6").innerHTML = Math.floor(
    weatherData.list[4].main.temp
  );
  document.getElementById("fImage6").src =
    "http://openweathermap.org/img/w/" + getIcon(4) + ".png";
};
