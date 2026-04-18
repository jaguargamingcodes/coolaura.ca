


if (localStorage.getItem('lat') === null || localStorage.getItem('lon') === null) {
  setLocation();
}

if (localStorage.getItem('lat') !== null || localStorage.getItem('lon') !== null) {
  getSetMain();
}



function getSetMain() {
  let mainW = `https://api.open-meteo.com/v1/forecast?latitude=${localStorage.getItem('lat')}&longitude=${localStorage.getItem('lon')}&current=temperature_2m,weather_code,apparent_temperature`
  fetch(mainW)

    .then(r => r.json())
    .then(d => {
      let codeS = d.current.weather_code;
      let icon = '❓';
      if (codeS === 0) {
        icon = ' ☀️';
      } else if (codeS === 1) {
        icon = ' 🌤️';
      } else if (codeS === 2) {
        icon = ' 🌥️';
      } else if (codeS === 3) {
        icon = ' ☁️';
      } else if ((codeS >= 51 && codeS <= 67) || (codeS >= 80 && codeS <= 82)) {
        icon = ' 🌧️';
      } else if (codeS >= 95) {
        icon = ' 🌩️';
      }
      console.log(codeS)
      document.getElementById('we').innerHTML = icon;
      console.log(d);
      console.log(d.current.apparent_temperature)
      document.getElementById("fc").innerHTML = d.current.temperature_2m + "°C";
      document.getElementById('flc').innerHTML = `feels like ${d.current.apparent_temperature}°C`
    })
    .catch(err => console.error("Fetch error:", err));

 let hourW = `https://api.open-meteo.com/v1/forecast?latitude=${localStorage.getItem('lat')}&longitude=${localStorage.getItem('lon')}&hourly=temperature_2m,apparent_temperature,weather_code&forecast_days=1&timezone=auto`;


  fetch(hourW)
  .then(h => h.json())
  .then(d => {
      console.log(d)




  })

}




function setLocation() {
  document.getElementById('warning').style.display = 'block'
}


function saveLocation() {
  let lat = document.getElementById('latVal').value;
  let lon = document.getElementById('lonVal').value;
  localStorage.setItem('lat', lat)
  localStorage.setItem('lon', lon)
  document.getElementById('warning').style.display = 'none'
  console.log(lat, lon)
}







