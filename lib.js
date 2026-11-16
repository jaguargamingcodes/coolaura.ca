if (localStorage.getItem('Search Engine') === null) {
    localStorage.setItem('Search Engine', 'Duckduckgo')
}

function checkTheme() {
    const theme = localStorage.getItem('theme')

    if (theme === null) {
        localStorage.setItem('theme', 'light')
    }

    else if (theme === 'light') {
        document.getElementById('theme').setAttribute('src', 'themeL.png');
        document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(211, 255, 211), rgb(211, 211, 255))'
    }

    else if (theme === 'dark') {
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
 const wallpaper = localStorage.getItem('wallpaper')

    if (wallpaper !== null) {
        document.body.style.backgroundImage = `url(${wallpaper})`
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
    const hue = localStorage.getItem('hue')

    if (hue !== null) {
        document.documentElement.style.filter = `hue-rotate(${hue}deg)`
    }
}

    }
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
    const engine = localStorage.getItem('Search Engine')
    if (query.includes('https://') || query.includes('.')) {
        document.location = query
    }

engine === 'Google' {
    window.location = `https://google.com/search?q=${encodeURIComponent(query)}`
} engine === 'Duckduckgo' {
    window.location = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
} engine === 'Bing' {
    window.location = `https://bing.com/search?q=${encodeURIComponent(query)}`
} engine === 'Yahoo!' {
    window.location = `https://yahoo.com/search?p=${encodeURIComponent(query)}`
} engine === 'Yandex' {
    window.location = `https://yandex.com/search?text=${encodeURIComponent(query)}`
}


document.getElementById('search_input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        search()
    }
}
    
)
