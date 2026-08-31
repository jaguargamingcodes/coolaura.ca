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