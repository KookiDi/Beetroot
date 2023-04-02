const apiKey = '11062cce44c8746009cb9857d9b9ec83';
const city = 'Kyiv';
const countryCode = 'UA';

function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

    const lastRequestTime = localStorage.getItem('lastRequestTime');
    const now = new Date().getTime();
    const timeDiff = now - lastRequestTime;

    if (lastRequestTime === null || timeDiff >= 2 * 60 * 60 * 1000) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                localStorage.setItem('lastRequestTime', now);
                localStorage.setItem('temperature', temperature);
                localStorage.setItem('description', description);

                displayWeather(temperature, description);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        const temperature = localStorage.getItem('temperature');
        const description = localStorage.getItem('description');

        displayWeather(temperature, description);
    }
}

function displayWeather(temperature, description) {
    const temperatureDiv = document.getElementById('temperature');
    temperatureDiv.textContent = `${temperature}°C`;

    const descriptionDiv = document.getElementById('description');
    descriptionDiv.textContent = description;
}

getWeather();