const searchBtn = document.getElementById('search');
const inputCity = document.getElementById('cityName');

searchBtn.addEventListener("click", () => {
    let cityData = inputCity.value;
    async function weatherApp() {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=31b40a55f97342189d884353251901&q=${cityData}&aqi=yes`);
        let weatherData = await response.json();
        
        let newPara = document.createElement('p');
        newPara.innerText = `Weather in ${weatherData.location.name}: ${weatherData.current.temp_c}°C, ${weatherData.current.condition.text}`;
        
        document.body.appendChild(newPara);
    }
    weatherApp();
});