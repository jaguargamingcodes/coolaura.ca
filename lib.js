const query = document.getElementById('tInput')

if(localStorage.getItem('se') == null) {
  localStorage.setItem('se', 'GOOGLE')
}

if(localStorage.getItem('wallpaper') == null || localStorage.getItem('wallpaper') == "" ) {
} else {
  document.body.style.backgroundImage = `url(${localStorage.getItem('wallpaper')})`
  document.body.style.animation = 'none'
  document.body.style.backgroundSize = "cover"
}

function showOptions() {
  const overlay = document.getElementById('Overlay1');
  overlay.style.display = 'block';
  overlay.style.position = 'fixed'
  setTimeout(() => {
    overlay.style.opacity = '1'
    document.getElementById('SettingsTitle').style.opacity = '1'
    document.getElementById('sp1').style.opacity = '1'
    document.getElementById('bar1').style.opacity = '1'
  }, 10);
}


function hideOptions() {
  const overlay = document.getElementById('Overlay1');
  overlay.style.display = 'none';
  overlay.style.position = 'fixed'
  setTimeout(() => {
    overlay.style.opacity = '0'
    document.getElementById('SettingsTitle').style.opacity = '0'
    document.getElementById('sp1').style.opacity = '0'
    document.getElementById('bar1').style.opacity = '0'
  }, 10);
}

function hideCustomizations() {
  const overlay2 = document.getElementById('Overlay2');
  overlay2.style.display = 'none';
  overlay2.style.position = 'fixed'
  setTimeout(() => {
    overlay2.style.opacity = '0'
    document.getElementById('customizationTitle').style.opacity = '0'
    document.getElementById('2sp1').style.opacity = '0'
    document.getElementById('bar2').style.opacity = '0'
  }, 10);
}

function showCustomizations() {
  const overlay2 = document.getElementById('Overlay2');
  overlay2.style.display = 'block';
  overlay2.style.position = 'fixed'
  setTimeout(() => {
    overlay2.style.opacity = '1'
    document.getElementById('customizationTitle').style.opacity = '1'
    document.getElementById('2sp1').style.opacity = '1'
    document.getElementById('bar2').style.opacity = '1'
  }, 10);
}

alert(
  "IMPORTANT NOTICE: \n \n This website is under construction; most of the features might be broken and unusable. Please be patient, this update wil take 1-2 months."
)

function changeWallpaper(){
  localStorage.setItem('wallpaper', document.getElementById('wpset').value)
  document.body.style.backgroundImage = `url(${localStorage.getItem('wallpaper')})`
}

function search() {
  if(localStorage.getItem('se') === 'GOOGLE') {
    window.location.href = `https://google.com/search?q=${query.value}`;
  } else if(localStorage.getItem('se') === 'DUCKDUCKGO') {
    window.location.href = `https://duckduckgo.com/?ai=web&q=${query.value}`;
  }
}

query.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    search();
  }
})

function setGoogle() {
  localStorage.setItem('se', 'GOOGLE')
}

function setDuckGo() {
  localStorage.setItem('se', 'DUCKDUCKGO')
}