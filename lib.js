if (localStorage.getItem('Search Engine') === null) {
    localStorage.setItem('Search Engine', 'Google')
}


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
    } else if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
    }
    checkTheme();
}

function checkWallpaper() {
    if (localStorage.getItem('wallpaper') !== null) {
        document.body.style.backgroundImage = `url(${localStorage.getItem('wallpaper')}`
    }

}

function setWP() {
    let wallpaper = window.prompt('Please enter Wallpaper link (Image Adress).')
    if (wallpaper !== null) {
        localStorage.setItem('wallpaper', wallpaper)
    }
    checkWallpaper();
}

checkWallpaper()
checkTheme()
checkPalette()

function checkPalette() {
    if (localStorage.getItem('hue') !== null) {
        document.documentElement.style.filter = `hue-rotate(${localStorage.getItem('hue')}deg)`
    }
    console.log('hello')
}

function setPalette() {
    let hue = window.prompt('Set Color Degree Number (custom theme)')
    if (hue !== null) {
        localStorage.setItem('hue', hue)
    }
    checkPalette();
}

function Google() {
    localStorage.setItem('Search Engine', 'Google')
}

function Duck() {
    localStorage.setItem('Search Engine', 'Duckduckgo')
}

function Bing() {
    localStorage.setItem('Search Engine', 'Bing')
}

function Yahoo() {
    localStorage.setItem('Search Engine', 'Yahoo!')
}

function Yandex() {
    localStorage.setItem('Search Engine', 'Yandex')
}

function search() {
    let query = document.getElementById('search_input').value
    if (query.includes('https://') || query.includes('.')) {
        document.location = query
    }

    if (localStorage.getItem('Search Engine') == 'Google') {
        window.location = `https://google.com/search?q=${query}`
    } else if (localStorage.getItem('Search Engine') == 'Duckduckgo') {
        window.location = `https://duckduckgo.com/?q=${query}`
    } else if (localStorage.getItem('Search Engine') == 'Bing') {
        window.location = `https://bing.com/search?q=${query}`
    } else if (localStorage.getItem('Search Engine') == 'Yahoo!') {
        window.location = `https://yahoo.com/search?p=${query}`
    } else if (localStorage.getItem('Search Engine') == 'Yandex') {
        window.location = `https://yandex.com/search?text=${query}`
    }
}