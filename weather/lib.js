


if(localStorage.getItem('lat') === null || localStorage.getItem('lon') === null) {
   setLocation();
}

if(localStorage.getItem('lat') !== null || localStorage.getItem('lon') !== null) {
   getSetMain();
}



function getSetMain() {
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${localStorage.getItem('lat')}&longitude=${localStorage.getItem('lon')}&current_weather=true`)
    .then(r => r.json())
    .then(d => document.getElementById("fc").innerHTML =
      d.current_weather.temperature + "°C"
    );
    console.log('test')
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
   console.log(lat,lon)
}







