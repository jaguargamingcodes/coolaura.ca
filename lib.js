import { PrayerTimeCalculator } from "@masaajid/prayer-times";

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

  const prayer = new PrayerTimeCalculator({
  method: "ISNA", 
  location: [43.6532, -79.3832],
  timezone: "America/Toronto",
});

const times = prayer.calculate()


