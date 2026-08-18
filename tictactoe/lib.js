b1S = true;
b2S = true;
b3S = true;
b4S = true;
b5S = true;
b6S = true;
b7S = true;
b8S = true;
b9S = true;

PlayerState = 'P1'

function swapPlayers() {
    if (PlayerState === 'P1') {
        PlayerState = 'P2'
    } else if (PlayerState === 'P2') {
        PlayerState = 'P1'
    }

    console.log('%c' + PlayerState + "'s turn", 'color: red; font-size: 30px;');
}

let x = '×'
let o = '○'

document.getElementById('b1').onclick = function () {
    console.log('Element: b1 clicked')
    if (PlayerState === 'P1' && b1S === true) {
        document.getElementById('b1').textContent = x;
        b1S = false
        document.getElementById('b1').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b1S === true) {
        document.getElementById('b1').textContent = o;
        b1S = false
        document.getElementById('b1').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b2').onclick = function () {
    console.log('Element: b2 clicked')
    if (PlayerState === 'P1' && b2S === true) {
        document.getElementById('b2').textContent = x;
        b2S = false
        document.getElementById('b2').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b2S === true) {
        document.getElementById('b2').textContent = o;
        b2S = false
        document.getElementById('b2').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b3').onclick = function () {
    console.log('Element: b3 clicked')
    if (PlayerState === 'P1' && b3S === true) {
        document.getElementById('b3').textContent = x;
        b3S = false
        document.getElementById('b3').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b3S === true) {
        document.getElementById('b3').textContent = o;
        b3S = false
        document.getElementById('b3').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b4').onclick = function () {
    console.log('Element: b4 clicked')
    if (PlayerState === 'P1' && b4S === true) {
        document.getElementById('b4').textContent = x;
        b4S = false
        document.getElementById('b4').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b4S === true) {
        document.getElementById('b4').textContent = o;
        b4S = false
        document.getElementById('b4').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b5').onclick = function () {
    console.log('Element: b5 clicked')
    if (PlayerState === 'P1' && b5S === true) {
        document.getElementById('b5').textContent = x;
        b5S = false
        document.getElementById('b5').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b5S === true) {
        document.getElementById('b5').textContent = o;
        b5S = false
        document.getElementById('b5').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b6').onclick = function () {
    console.log('Element: b6 clicked')
    if (PlayerState === 'P1' && b6S === true) {
        document.getElementById('b6').textContent = x;
        b6S = false
        document.getElementById('b6').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b6S === true) {
        document.getElementById('b6').textContent = o;
        b6S = false
        document.getElementById('b6').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b7').onclick = function () {
    console.log('Element: b7 clicked')
    if (PlayerState === 'P1' && b7S === true) {
        document.getElementById('b7').textContent = x;
        b7S = false
        document.getElementById('b7').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b7S === true) {
        document.getElementById('b7').textContent = o;
        b7S = false
        document.getElementById('b7').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b8').onclick = function () {
    console.log('Element: b8 clicked')
    if (PlayerState === 'P1' && b8S === true) {
        document.getElementById('b8').textContent = x;
        b8S = false
        document.getElementById('b8').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b8S === true) {
        document.getElementById('b8').textContent = o;
        b8S = false
        document.getElementById('b8').style.pointerEvents = 'none'
    }
    swapPlayers();
}

document.getElementById('b9').onclick = function () {
    console.log('Element: b9 clicked')
    if (PlayerState === 'P1' && b9S === true) {
        document.getElementById('b9').textContent = x;
        b9S = false
        document.getElementById('b9').style.pointerEvents = 'none'
    } else if (PlayerState === 'P2' && b9S === true) {
        document.getElementById('b9').textContent = o;
        b9S = false
        document.getElementById('b9').style.pointerEvents = 'none'
    }
    swapPlayers();
}





