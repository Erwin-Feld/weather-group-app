import axios from "https://cdn.skypack.dev/axios";

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



async function radiationGraph(){
    const apiData = await fetchWeatherData("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=shortwave_radiation_sum&timezone=Europe%2FBerlin");

    const yData = apiData.daily.shortwave_radiation_sum;

    const xData = apiData.daily.time;
    
    
const ctxL = document.getElementById("lineChart").getContext("2d");

Chart.defaults.color = "#ffffff";
const myLineChart = new Chart(ctxL, {
  type: "line",

  data: {
    labels: xData,
    datasets: [
      {
        label: "Mj/square meters ",
        data: yData,
        backgroundColor: ["rgba(105, 0, 132, .8)"],
        fillColor : "rgba(255, 89, 114, 0.7)",
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 4,
      },
    ],
  },
  options: {
    responsive: true,
   color: "white",
   scales: {
    x: {
        ticks: {
            padding: 20,
            font: {
                size: 13,
            }
        }
    },
    y: {
        ticks: {
            padding: 20,
            font: {
                size: 13,
            }
        }
    },
}
    
  
  },
});

  
}




radiationGraph()