async function showCurrentCity(event, cityName) {
  event.preventDefault();
  document.querySelector("h2.city").innerHTML = cityName;
  let apiKey = `de2c40e370d58e257faf07ba4ea95840`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&&units=imperial`;
  // console.log(apiUrl);

  let response = await axios.get(apiUrl);
  let currentWeather = response.data.main.temp;

  document.querySelector("p.currentTemperature").innerHTML =
    Math.floor(currentWeather) + `°`;
  // console.log(currentWeather);
  console.log(response);
}

function showTemp() {}

// let form = document.getElementById("my-form");
// form.addEventListener("submit", showCurrentCity);

let now = new Date();

let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];

let hour = now.getHours();

let minute = now.getMinutes();

let currentDateTime = document.querySelector("h1");

currentDateTime.innerHTML = `${day} ${hour}:${minute}`;

let tempConverter = document.querySelector("#temp-converter");

let currentTemp = document.querySelector("p.currentTemperature");

if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
