let moveyes = true;
let playerpositionX = 0;
const movedistance = 100;
let playerpositionY = 0;
let isjumping = false; 
let ismoving = false;

function move(val) {
     if(!moveyes) return;
     moveyes = false;
    const player = document.getElementById('player');
    playerpositionX += val;
    player.style.left = playerpositionX + "px";
    setTimeout(function(){ismoving = false;}, 200)
    setTimeout(() => { moveyes = true; }, 100); 
}

function jump() {
    if (isjumping === true) return;  
    isjumping = true; 
    const player = document.getElementById('player')
    player.style.rotate = '180deg'
    playerpositionY = 200; 
    player.style.bottom = playerpositionY + "px";
    setTimeout(function() {
        playerpositionY = 0; 
        player.style.bottom = "0px";
        setTimeout(() => {
            isjumping = false; 
        }, 400); 
    }, 400); 
}


document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowUp" && event.repeat) return;
    if (event.key === "ArrowUp") {  if (!isjumping) {jump();}}
   if (event.key === "ArrowRight") move(movedistance);
    if (event.key === "ArrowLeft") move(-movedistance);
});

setInterval(() => {
    const player = document.getElementById('player');
    if (playerpositionY > 0 && !isjumping) {
        playerpositionY -= 10; 
        if (playerpositionY < 0) playerpositionY = 0; 
        player.style.bottom = playerpositionY + "px";
    }
}, 1);

