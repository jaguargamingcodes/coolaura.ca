window.addEventListener('load', () => {
    if (localStorage.getItem('browser') !== 'coolaura') {

        const hideGoogleSearch = () => {
            document.querySelectorAll('.gcse-search, .gsc-control-cse, .gsc-search-box')
                .forEach(el => {
                    el.style.setProperty('display', 'none', 'important');
                });
        };

        hideGoogleSearch();

        const interval = setInterval(hideGoogleSearch, 200);


        setTimeout(() => clearInterval(interval), 5000);
    }
});

if (localStorage.getItem('browser') === null) {
    localStorage.setItem('browser', 'coolaura')
}

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


if (localStorage.getItem('browser') === 'coolaura') {
        document.getElementById('searchbar').style.display = 'none'
}

input = document.getElementById('searchbar')

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        execute();
    }
});

function execute() {
    if (input.value.includes('https') || input.value.includes('.')) {
        window.location.href = `https://${input.value}`
    }

    if (localStorage.getItem('browser') === 'chrome') {
        window.location.href = `https://google.com/search?q=${input.value}`
    }

    if (localStorage.getItem('browser') === 'duckgo') {
        window.location.href = `https://duckduckgo.com/?q=${input.value}`
    }

}