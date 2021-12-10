import { fetchWeatherData } from "../apiData.js";




fetchWeatherData(urlNewsApi)

async function dirk(urlNewsApi) {
    const apiData = await fetchWeatherData(urlNewsApi)
    for (let i = 0; i < apiData.length; i++) {
        const data = apiData[i];


        data = document.getElementById('dirk');
        data.innerHTML += 
        `<div"> ${apiData.current_weather.time}</div>
        <div"> ${apiData.current_weather.windspeed}</div>
        <div"> ${apiData.current_weather.winddirection}</div>`
    }

}
window.onload = dirk();