function fetchWeather(endpoint, cityName, callback) {
  const url = `${API_BASE}${endpoint}?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(`Loading error ${endpoint}:`, error));
}

function requestAPI(cityName) {
  fetchWeather("weather", cityName, displayWeather);
}

function requestForecastAPI(cityName) {
  fetchWeather("forecast", cityName, appendToRoot);
}