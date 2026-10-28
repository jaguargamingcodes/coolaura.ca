function checkTheme() {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'light')
    }

    else if (localStorage.getItem('theme') === 'light') {
        document.getElementById('theme').setAttribute('src', 'themeL.png');
        document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(211, 255, 211), rgb(211, 211, 255))'
    }

    else if (localStorage.getItem('theme') === 'dark') {
        document.getElementById('theme').setAttribute('src', 'themeD.png')
        document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(26, 41, 26), rgb(22, 22, 42))'
    }
}



function toggleTheme() {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark')
    }  else if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
    }
    checkTheme();
}

function checkWallpaper() {
    if(localStorage.getItem('wallpaper') !== null) {
        document.body.style.backgroundImage = `url(${localStorage.getItem('wallpaper')}`
    }
  
}

function setWP() {
    let wallpaper = window.prompt('Please enter Wallpaper link (Image Adress).')
    if(wallpaper !== null) {
        localStorage.setItem('wallpaper', wallpaper)
    }
    checkWallpaper();
}

checkWallpaper()
checkTheme()
