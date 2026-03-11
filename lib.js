if (localStorage.getItem('browser') === null) {
    localStorage.setItem('browser', 'chrome')
}




function search() {
    let url = document.getElementById("search").value
    if (url.includes('.')) {
        console.log(url)
        console.log(url)
        window.location.href = `https://${url}`
    } else if (url === "") {
        document.getElementById('search').setAttribute('placeholder', 'Search Box Cannot Be Empty')
    }

    else if (localStorage.getItem('browser') === 'chrome') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }

    else if (localStorage.getItem('browser') === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;
    }

    else if(url = 'beastmode') {
        localStorage.setItem('beastMode',true)
        window.location="https://coolaura.ca"
    }
}


input = document.getElementById("search");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search()
    }
});
console.log(localStorage.getItem('browser'))

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'rgb(19, 19, 19)')
}

document.body.style.backgroundColor = localStorage.getItem('theme')

if(localStorage.getItem('beastMode')===null) {
    localStorage.setItem('beastMode','off')
}

if(localStorage.getItem('beastMode')=='on') {
    document.body.style = "background-image:url(https://t3.ftcdn.net/jpg/08/22/17/96/360_F_822179638_8EE4EXVhQztvhjhK112z426ivd5CK4Ji.jpg); background-repeat: no-repeat; background-position: center; background-size: 100vw 150vh;"
    document.getElementById("mainTitle").style="color: greenyellow; text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #9bc5ff, 0 0 20px  #9bc5ff, 0 0 25px #001aff, 0 0 30px #001aff, 0 0 35px #001aff"
    document.getElementById('subtitle_text').innerHTML = "beastmode"
    document.getElementById('subtitle_text').style="color: aqua;"
    console.log('_')
}


function bm() {
    if (localStorage.getItem('beastMode') == 'off') {
        let opt = window.confirm("Do you want to enter Beastmode?")
        if (opt) {
            localStorage.setItem('beastMode', 'on')
        }

        else { }
    }

    else if (localStorage.getItem('beastMode') == 'on') {
            let optn = window.confirm("Do you want to exit Beastmode?")
            if (optn) {
                localStorage.setItem('beastMode', 'off')
            }

            else { }
        }
    }

function wallpaper() {
let img = window.prompt('Set Wallpaper URL')
    document.getElementById('wallpaper_cont').style.backgroundImage = `url(${img})`
    localStorage.setItem('wallpapersrc', img)
}



    document.getElementById('wallpaper_cont').style.backgroundImage = `url(${localStorage.getItem('wallpapersrc')})`
