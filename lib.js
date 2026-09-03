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

