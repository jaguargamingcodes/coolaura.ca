let playerpositionX = 0;
const movedistance = 100;
let playerpositionY = 0;
m = false
function move(val) {
    if(m) {}
   const player = document.getElementById('player');
   playerpositionX += val;
   m=true;
   player.style.left = playerpositionX + "px"
   m=false
}
let j = false;
function jump() {
    if(j) {}
    j = true;
    const player = document.getElementById('player');
    const height = 1000;
    playerpositionY = height;
    player.style.bottom = playerpositionY + "px"
    setTimeout(function() {playerpositionY = 0; player.style.bottom = playerpositionY + "px"; j=false}, 300)
    console.log
}

document.addEventListener('keydown', (event) => {
     if (event.key === "ArrowRight") move(movedistance)
     if (event.key === "ArrowLeft") move(-movedistance)
});

document.addEventListener('keydown', (event) => {
     if (event.key === "ArrowUp") {jump()} 
});