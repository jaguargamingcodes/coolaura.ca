
if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'rgb(19, 19, 19)')
}

document.body.style.backgroundColor = localStorage.getItem('theme')




function wallpaper() {
let img = window.prompt('Set Wallpaper')
    document.getElementById('wallpaper_cont').style.backgroundImage = `url(${img})`
    localStorage.setItem('wallpapersrc', img)
}



    document.getElementById('wallpaper_cont').style.backgroundImage = `url(${localStorage.getItem('wallpapersrc')})`

 function performCustomSearch() {
    var query = document.getElementById('search').value;
    if (query) {
      var element = google.search.cse.element.getElement('searchResults'); // 'searchResults' is the div ID
      element.execute(query);
    }
  }

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}
window.onload = function() {
const islamicDate = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', options).format(new Date());

document.getElementById('subtitle_text').innerHTML = islamicDate;
        const coords = new adhan.Coordinates(43.4516, -80.3123);
        const date = new Date();
        const params = adhan.CalculationMethod.NorthAmerica();
        const prayerTimes = new adhan.PrayerTimes(coords, date, params);
        document.getElementById('subtitle_text').innerHTML = `
            <p><b>Fajr:</b> ${prayerTimes.fajr.toLocaleTimeString()}</p>
            <p><b>Sunrise:</b> ${prayerTimes.sunrise.toLocaleTimeString()}</p>
            <p><b>Dhuhr:</b> ${prayerTimes.dhuhr.toLocaleTimeString()}</p>
            <p><b>Asr:</b> ${prayerTimes.asr.toLocaleTimeString()}</p>
            <p><b>Maghrib:</b> ${prayerTimes.maghrib.toLocaleTimeString()}</p>
            <p><b>Isha:</b> ${prayerTimes.isha.toLocaleTimeString()}</p>
        `;

};

