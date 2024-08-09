const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const currentWeatherEl = document.getElementById('current-weather');
const forecastEl = document.getElementById('forecast');
const dateEl = document.getElementById('date');

searchButton.addEventListener('click', getWeatherData);

function getWeatherData() {
  const city = cityInput.value.trim();
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        showCurrentWeather(data);
        getForecast(data.coord.lat, data.coord.lon);
      })
      .catch(error => console.error(error));
  }
}

function showCurrentWeather(data) {
  const { main, weather, name } = data;
  const weatherImage = document.createElement('img');

  switch (weather[0].icon) {
    case '01d':
    case '01n':
      weatherImage.src = 'images/01d.svg';
      break;
    case '02d':
    case '02n':
      weatherImage.src = 'images/02d.svg';
      break;
    case '03d':
    case '03n':
      weatherImage.src = 'images/03d.svg';
      break;
    case '04d':
    case '04n':
      weatherImage.src = 'images/04d.svg';
      break;
    case '09d':
    case '09n':
      weatherImage.src = 'images/09d.svg';
      break;
    case '10d':
    case '10n':
      weatherImage.src = 'images/10d.svg';
      break;
    case '11d':
    case '11n':
      weatherImage.src = 'images/11d.svg';
      break;
    case '13d':
    case '13n':
      weatherImage.src = 'images/13d.svg';
      break;
    default:
      weatherImage.src = 'images/50d.svg';
  }

  currentWeatherEl.innerHTML = `
    <h2>${name}</h2>
    <p><img src="${weatherImage.src}" alt="weather icon"> ${weather[0].description}</p>
    <p>Temperature: ${main.temp}°C</p>
    <div class="weather-info">
      <div class="info-humidity">
        <i class="bx bx-droplet"></i>
        <div class="text">
          <div class="info-humidity">Humidity: ${main.humidity}%</div>
        </div>
      </div>
      <div class="info-wind">
        <i class="bx bx-wind"></i>
        <div class="text">
          <div class="info-wind">Wind: ${data.wind.speed} km/h</div>
        </div>
      </div>
    </div>
  `;
}

function getForecast(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      showForecast(data);
    })
    .catch(error => console.error(error));
}

function showForecast(data) {
    const forecastHtml = data.list.slice(0, 5).map(forecast => {
      const weatherImage = document.createElement('img');
  
      switch (forecast.weather[0].icon) {
        case '01d':
        case '01n':
          weatherImage.src = 'images/01d.svg';
          break;
        case '02d':
        case '02n':
          weatherImage.src = 'images/02d.svg';
          break;
        case '03d':
        case '03n':
          weatherImage.src = 'images/03d.svg';
          break;
        case '04d':
        case '04n':
          weatherImage.src = 'images/04d.svg';
          break;
        case '09d':
        case '09n':
          weatherImage.src = 'images/09d.svg';
          break;
        case '10d':
        case '10n':
          weatherImage.src = 'images/10d.svg';
          break;
        case '11d':
        case '11n':
          weatherImage.src = 'images/11d.svg';
          break;
        case '13d':
        case '13n':
          weatherImage.src = 'images/13d.svg';
          break;
        default:
          weatherImage.src = 'images/50d.svg';
      }
  
      return `
        <div class="forecast-item">
          <p>${forecast.dt_txt}</p>
          <img src="${weatherImage.src}" alt="weather icon">
          <p>Temperature: ${forecast.main.temp}°C</p>
          <p>Humidity: ${forecast.main.humidity}%</p>
          <p>Wind: ${forecast.wind.speed} km/h</p>
        </div>
      `;
    }).join('');
    forecastEl.innerHTML = forecastHtml;
  }
