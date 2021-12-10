import axios from 'https://cdn.skypack.dev/axios';


async function fetchWeatherData(url) {
    try {
        let res = await axios({
            url: url,
            method: "get",
            timeout: 8000,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.status == 200) {
            // console.log(res.status)
        }
        // console.log(res.data)
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

const urlNewsApi = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";


// fetchWeatherData(urlNewsApi)

async function ayman() {
    const apiData = await fetchWeatherData(urlNewsApi);
    
    const temp = apiData.hourly.temperature_2m

    console.log(temp)

    // console.log(longitudfe)

    // document.getElementById('content').innerHTML = `<p>${longitudfe}</p>`;
    // const doc =  document.getElementById('content').innerHTML = `<p>${apiData.length}</p>`;
    // return doc
}
window.onload = ayman();