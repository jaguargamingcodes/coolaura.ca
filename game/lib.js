PlayerState = 'P1'

function swapPlayers() {
    if(PlayerState === 'P1') {
        PlayerState = 'P2'
    } else if(PlayerState === 'P2') {
        PlayerState = 'P1'
    }

    console.log('%c' + PlayerState + "'s turn", 'color: red; font-size: 30px;');
}

let x = '×'
let o = '○'

document.getElementById('b1').onclick = function () {
    console.log('Element: b1 clicked')
    if(PlayerState === 'P1') {
        document.getElementById('b1').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b1').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b2').onclick = function () {
    console.log('Element: b2 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b2').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b2').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b3').onclick = function () {
    console.log('Element: b3 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b3').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b3').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b4').onclick = function () {
    console.log('Element: b4 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b4').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b4').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b5').onclick = function () {
    console.log('Element: b5 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b5').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b5').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b6').onclick = function () {
    console.log('Element: b6 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b6').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b6').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b7').onclick = function () {
    console.log('Element: b7 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b7').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b7').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b8').onclick = function () {
    console.log('Element: b8 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b8').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b8').textContent = o;
    }
    swapPlayers();
}

document.getElementById('b9').onclick = function () {
    console.log('Element: b9 clicked')
        if(PlayerState === 'P1') {
        document.getElementById('b9').textContent = x;
    } else if(PlayerState === 'P2') {
        document.getElementById('b9').textContent = o;
    }
    swapPlayers();
}





