let addChart = document.getElementById('chart')

// For future dropdown suggestions during active search
// const inputValue = (e) => {
//   const searchInput = document.getElementById('zipcodeOrCity').value
//   const match = data.filter( city => {
//     return city.name.slice(0, searchInput.length) === searchInput
//   })
// }

const handleSubmit = () => {
  const searchInput = document.getElementById('zipcodeOrCity').value
  const match = data.find( city => city.name === searchInput )
  match ? fetchWeather(match.id) : alert('City Not Found :[')
}

//Add days of the week, icon for expected weather, gradient red => blue for high => low
addChart = c3.generate({
  data: {
      columns: [
          ['dailyHigh', 100, 80, 90, 78, 74],
          ['dailyLow', 74, 70, 64, 55, -10]
      ],
      type: 'bar',
      groups: [
          ['dailyHigh', 'dailyLow']
      ]
  },
  grid: {
      y: {
          lines: [{value:0}]
      }
  }
})

function reqListener () {
  console.log(this.responseText);
  localStorage.setItem('forecast', this.responseText)
}

//Check localStorage if forcast, check match, !match fetch new forecast
const fetchWeather = (id) => {
  const requestForecast = new XMLHttpRequest();
  requestForecast.addEventListener("load", reqListener);
  requestForecast.open("GET", `https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=44d3f2f719ef5ed067691cf028099022`);
  requestForecast.send();
}

//Clean data func getDay from timestamp

//Clean data func get icons if they exist

//Clean data func get high low temps. Save as ['dailyHigh', 100, 80, 90, 78, 74]
