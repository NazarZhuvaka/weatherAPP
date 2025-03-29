API_BASE = "https://api.openweathermap.org/data/2.5/weather";
API_KEY = "";

function requestAPI(cityName) {
  const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    });
}

function requestForecastAPI(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        appendToRoot(data);
    });
}

