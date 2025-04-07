// Replace this with your OpenWeatherMap API key
const apiKey = 'fe2152b87f03b6735965e5f814fce601';  // Replace with your API key from OpenWeatherMap

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('city-name').textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        
        document.getElementById('weather-info').style.display = 'block';  // Show weather info
      } else {
        alert('City not found!');
      }
    })
    .catch(error => {
      alert('Error fetching weather data.');
      console.error(error);
    });
}
