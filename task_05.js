
const apiKey = 'c93a69b2266e80b4de0d075c87f121a5'; 

function fetchWeather() {
    const location = document.getElementById('location-input').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => alert(error.message));
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('city-name').textContent = `Weather in ${cityName}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('weather-description').textContent = `Description: ${weatherDescription}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
}
